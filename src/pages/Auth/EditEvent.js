import React, { useState } from "react";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";
import CameraSVG from "../../svgs/CameraSVG";

const EditEvent = () => {
  const [eventInfo, setEventInfo] = useState({
    eventName: "",
    numberOfAttendees: "",
    startTime: "",
    endTime: "",
    gender: "Male",
    address: "",
    details: "",
  });

  const isFormValid = () => {
    return Object.values(eventInfo).every((value) => value);
  };

  const handleDelete = () => {
    setEventInfo({
      eventName: "",
      numberOfAttendees: "",
      startTime: "",
      endTime: "",
      gender: "Male",
      address: "",
      details: "",
    });
  };

  return (
    <div className="w-full h-full flex justify-center items-center p-8">
      <div className="w-full lg:w-2/3 bg-[#282836] rounded-[22px] p-8">
        <h2 className="text-white text-[30px] mb-8">Edit Event</h2>
        <form className="flex flex-col gap-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="col-span-2 lg:col-span-1">
              <div className="w-full h-[150px] bg-[#323048] rounded-[10px] flex justify-center items-center border-2 border-dashed border-green-500">
                <CameraSVG />
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className="w-full h-[150px] bg-[#323048] rounded-[10px] flex justify-center items-center border-2 border-dashed border-green-500">
                <CameraSVG />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <Input
              label="Event Name"
              placeholder="Display Name"
              value={eventInfo.eventName}
              onChange={(e) =>
                setEventInfo({ ...eventInfo, eventName: e.target.value })
              }
            />
            <Input
              label="Number of Attendees"
              placeholder="1500"
              value={eventInfo.numberOfAttendees}
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
              placeholder="From - 10 AM"
              value={eventInfo.startTime}
              onChange={(e) =>
                setEventInfo({ ...eventInfo, startTime: e.target.value })
              }
            />
            <Input
              label="End Time"
              placeholder="To - 6 PM"
              value={eventInfo.endTime}
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
            placeholder="Sample Building, Sample Town, Sample City"
            value={eventInfo.address}
            onChange={(e) =>
              setEventInfo({ ...eventInfo, address: e.target.value })
            }
          />
          <div className="w-full h-[150px] bg-green-500 rounded-[10px] flex justify-center items-center">
            Tap to View
          </div>
          <TextArea
            label="Details"
            placeholder="Details will be placed here"
            value={eventInfo.details}
            onChange={(e) =>
              setEventInfo({ ...eventInfo, details: e.target.value })
            }
          />
          <PrimaryButton label="Save" disabled={!isFormValid()} />
          <SecondaryButton
            label="Delete"
            className="bg-gradient-to-r from-blue-500 to-red-500"
            onClick={handleDelete}
          />
        </form>
      </div>
    </div>
  );
};

export default EditEvent;
