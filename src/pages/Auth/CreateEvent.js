import React, { useState } from "react";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";
import AddPhotoSVG from "../../svgs/AddPhotoSVG";
import "react-calendar/dist/Calendar.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useMutation } from "@tanstack/react-query";
import { createEvent } from "../../api/auth";
import "react-calendar/dist/Calendar.css";
import Calendar from "../../components/Test";
import { useNavigate } from "react-router-dom";

const CreateEvent = () => {
  const navigate = useNavigate();
  const [eventInfo, setEventInfo] = useState({
    eventName: "",
    numberOfAttendees: "",
    startTime: "",
    endTime: "",
    gender: "Male",
    address: "",
    details: "",
    date: new Date(),
    coordinates: { lat: null, lng: null },
    images: [],
  });
  const [date, setDate] = useState(null);
  const { mutate } = useMutation({
    mutationFn: () => createEvent({ ...eventInfo, date }),
    mutationKey: ["CreateEvent"],
    onSuccess: () => navigate("/"),
  });

  const handleSubmit = () => {
    console.log(eventInfo);
    mutate();
  };

  const isFormValid = () => {
    return Object.values(eventInfo).every((value) => value);
  };

  const handleDateChange = (date) => {
    setEventInfo({ ...eventInfo, date });
  };

  const handleMapClick = (e) => {
    const coordinates = { lat: e.latLng.lat(), lng: e.latLng.lng() };
    setEventInfo({ ...eventInfo, coordinates });
  };

  const coords = { lat: 29.186716, lng: 47.955038 };

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    console.log(files);

    setEventInfo({ ...eventInfo, images: [...files], image: files[0] });
  };

  return (
    <div className="w-full h-full flex justify-center items-center p-8">
      <div className="w-full lg:w-2/3 bg-[#282836] rounded-[22px] p-8">
        <h2 className="text-white text-[30px] mb-8">Create Event</h2>
        <form className="flex flex-col gap-8">
          <div className="flex flex-row justify-between">
            <div className="flex items-center">
              <div className="flex gap-4">
                <div className="w-[179px] h-[161px]">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    style={{ display: "none" }}
                    id="photo-upload"
                  />
                  {eventInfo.images.length === 0 ? (
                    <label
                      htmlFor="photo-upload"
                      className="w-full h-full bg-transparent flex justify-center items-center cursor-pointer"
                    >
                      <AddPhotoSVG />
                    </label>
                  ) : (
                    <img
                      src={URL.createObjectURL(eventInfo.images[0])}
                      alt="Event photo 1"
                      className="w-full h-full object-cover rounded-[10px]"
                    />
                  )}
                </div>
                <div className="w-[179px] h-[161px]">
                  {eventInfo.images.length <= 1 ? (
                    <label
                      htmlFor="photo-upload"
                      className="w-full h-full bg-transparent flex justify-center items-center cursor-pointer"
                    >
                      <AddPhotoSVG />
                    </label>
                  ) : (
                    <img
                      src={URL.createObjectURL(eventInfo.images[1])}
                      alt="Event photo 2"
                      className="w-full h-full object-cover rounded-[10px]"
                    />
                  )}
                </div>
                <div className="w-[179px] h-[161px]">
                  {eventInfo.images.length <= 2 ? (
                    <label
                      htmlFor="photo-upload"
                      className="w-full h-full bg-transparent flex justify-center items-center cursor-pointer"
                    >
                      <AddPhotoSVG />
                    </label>
                  ) : (
                    <img
                      src={URL.createObjectURL(eventInfo.images[2])}
                      alt="Event photo 3"
                      className="w-full h-full object-cover rounded-[10px]"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-center p-5">
              <Calendar selectedDate={date} setSelectedDate={setDate} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <Input
              label="Event Name"
              placeholder="Enter event name"
              onChange={(e) =>
                setEventInfo({ ...eventInfo, eventName: e.target.value })
              }
            />
            <Input
              label="Number of Attendees"
              placeholder="Enter number of attendees"
              onChange={(e) =>
                setEventInfo({
                  ...eventInfo,
                  numberOfAttendees: e.target.value,
                })
              }
            />
          </div>
          <div className="grid grid-cols-2 gap-8">
            <Input
              label="Start Time"
              placeholder="Enter start time (e.g., 10 AM)"
              onChange={(e) =>
                setEventInfo({ ...eventInfo, startTime: e.target.value })
              }
            />
            <Input
              label="End Time"
              placeholder="Enter end time (e.g., 6 PM)"
              onChange={(e) =>
                setEventInfo({ ...eventInfo, endTime: e.target.value })
              }
            />
          </div>
          <div className="text-white">Attendees Gender</div>
          <div className="flex flex-col lg:flex-row gap-5">
            <div
              className={`w-full border-4 ${
                eventInfo.gender === "Male"
                  ? "rounded-[12px] border-4 border-[#4583D5]"
                  : "border-transparent"
              }`}
            >
              <SecondaryButton
                onClick={() => setEventInfo({ ...eventInfo, gender: "Male" })}
                label="Male"
              />
            </div>
            <div
              className={`w-full border-4 ${
                eventInfo.gender === "Female"
                  ? "rounded-[12px] border-4 border-[#4583D5]"
                  : "border-transparent"
              }`}
            >
              <SecondaryButton
                onClick={() => setEventInfo({ ...eventInfo, gender: "Female" })}
                label="Female"
              />
            </div>
            <div
              className={`w-full border-4 ${
                eventInfo.gender === "Mix"
                  ? "rounded-[12px] border-4 border-[#4583D5]"
                  : "border-transparent"
              }`}
            >
              <SecondaryButton
                onClick={() => setEventInfo({ ...eventInfo, gender: "Mix" })}
                label="Mix"
              />
            </div>
          </div>
          <Input
            label="Address"
            placeholder="Enter event address"
            onChange={(e) =>
              setEventInfo({ ...eventInfo, address: e.target.value })
            }
          />
          <TextArea
            label="Details"
            placeholder="Enter event details"
            onChange={(e) =>
              setEventInfo({ ...eventInfo, details: e.target.value })
            }
          />
          <PrimaryButton
            label="Confirm"
            disabled={!isFormValid()}
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
