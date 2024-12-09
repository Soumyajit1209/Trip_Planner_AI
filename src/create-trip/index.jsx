import { AI_PROMPT, selectBudgetOptions } from "@/constants/options";
import { selectTravelarList } from "@/constants/options";
import { Button } from "@/components/ui/button";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { toast } from "sonner";
import { chatCompletion } from "@/service/AIModal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { setDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { db } from "@/service/firebaseConfig";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const CreateTrip = () => {
  const [place, setplace] = useState();
  const [formData, setformData] = useState([]);
  const [OpenDailog, setOpenDailog] = useState(false);
  const [loading, setloading] = useState(false)

  const handleInputChange = (name, value) => {
    setformData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const login = useGoogleLogin({
    onSuccess: (codeResp) => console.log(codeResp),
    onError: (error) => console.log(error),
  });

  const OnGenerateTrip = async () => {
    const user = localStorage.getItem("user");
    if (!user) {
      setOpenDailog(true);
      return;
    }

    if (
      (formData?.noOfDays > 5 && !formData?.location) ||
      !formData?.budget ||
      !formData?.traveler
    ) {
      toast("Please fill all details");

      return;
    }
    setloading(true);
    const FINAL_PROMPT = AI_PROMPT.replace(
      "{location}",
      formData?.location?.label
    )
      .replace("{totalDays}", formData?.noOfDays)
      .replace("{traveler}", formData?.traveler)
      .replace("{budget}", formData?.budget)
      .replace("{totalDays}", formData?.noOfDays);

    console.log(FINAL_PROMPT);

    const result = await chatCompletion.controller(FINAL_PROMPT);

    console.log("___", result?.response?.text());
    setloading(false);
    SaveAiTrips(result?.response?.text());
  };

  const SaveAiTrips = async (TripData) => {
    setloading(true);
    const user = JSON.parse(localStorage.getItem("user"));
    const docId = Date.now().toString();
    await setDoc(doc(db, "AITrips", docId), {
      userSelection: formData,
      tripData: TripData,
      userEmail: user?.email,
      id: docId,
    });
    setloading(false);
  };

  // eslint-disable-next-line no-unused-vars
  const GetUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "Application/json",
          },
        }
      )
      .then((resp) => {
        console.log(resp);
        localStorage.setItem("user", JSON.stringify(resp.data));
        setOpenDailog(false);
        OnGenerateTrip();
      });
  };

  return (
    <>
      <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5  mt-10">
        <h2 className="font-bold text-3xl">
          Tell us your travel preferences 🏕️🌳
        </h2>
        <p className="mt-3 text-gray-500 text-xl">
          Just provide some basic information, and our trip palnner will
          generate a customized itinerary based on your preferences{" "}
        </p>
        <div className="mt-20 flex flex-col gap-10">
          <div className="mt-20">
            <h2 className="text-xl my-3 font-medium">
              What is destination of choice?
            </h2>
            <GooglePlacesAutocomplete
              apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
              selectProps={{
                place,
                onChange: (v) => {
                  setplace(v);
                  handleInputChange("location", v);
                },
              }}
            />
          </div>

          <div>
            <h2 className="text-xl my-3 font-medium">
              How many days are you planning yout trip?
            </h2>
            <input
              className="h-7 border-gray-400 border-2"
              placeholder={"Ex-3"}
              type="number"
              onChange={(e) => handleInputChange("noOfDays", e.target.value)}
            />
          </div>
        </div>

        <div>
          <h2 className="text-xl my-7 font-medium">What is Your Budget?</h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {selectBudgetOptions.map((items, index) => (
              <div
                key={index}
                onClick={() => handleInputChange("budget", items.title)}
                className={`p-4 border rounded-lg cursor-pointer hover:shadow-lg
             ${formData?.budget == items.title && "shadow-md border-black"}
            `}
              >
                <h2 className="text-4xl">{items.icon}</h2>
                <h2 className="font-bold text-lg">{items.title}</h2>
                <h2 className="text-sm text-gray-500">{items.desc}</h2>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl my-7 font-medium">
            Who do you plan on travelling with on your next adventure?
          </h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {selectTravelarList.map((items, index) => (
              <div
                key={index}
                onClick={() => handleInputChange("traveler", items.people)}
                className={`p-4 border rounded-lg cursor-pointer hover:shadow-lg
            ${formData?.traveler == items.people && "shadow-lg border-black"}
            `}
              >
                <h2 className="text-4xl">{items.icon}</h2>
                <h2 className="font-bold text-lg">{items.title}</h2>
                <h2 className="text-sm text-gray-500">{items.desc}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
     <div className="my-10 justify-end flex">
      <Button 
      disabled = {loading}
      onClick = {OnGenerateTrip}>
        {loading?
        <AiOutlineLoading3Quarters className="h-7 w-7 animate-spin"/>: 'Generate Trip'
      }
      </Button>
     </div>

      <Dialog open={OpenDailog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img src="logo.svg" />
              <h2 className="font-bold text-lg mt-7">Sign In With Google</h2>
              <p>Sign in to the App with Google authentication</p>

              <Button
              disabled = {loading}
                onClick={login}
                className="w-full mt-5 flex gap-4 items-center"
              >
                <FcGoogle className="h-7 w-7" />
                Sign In With Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateTrip;
