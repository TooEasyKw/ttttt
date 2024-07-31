import instance from "./index";
import { storeToken } from "./storage";

// Sign Up
const signUp = async (organizationInfo) => {
  const formData = new FormData();
  for (const key in organizationInfo) {
    formData.append(key, organizationInfo[key]);
  }
  const { data } = await instance.post("/organization/signup", formData);
  storeToken(data.token);
  return data;
};

// Sign In
const signIn = async (usernameOrEmail, password, remeberMe) => {
  console.log("DONE");
  const { data } = await instance.post("/organization/signin", {
    email: usernameOrEmail,
    password,
  });
  if (data.token && remeberMe) {
    storeToken(data.token);
  }
  console.log("DONE");
  return data;
};

// Get All Organizations
const getAllOrganizations = async () => {
  const { data } = await instance.get("/organization/");
  return data;
};

// Get Organization Profile
const getOrganizationProfile = async () => {
  const { data } = await instance.get("/organization/profile");
  return data;
};

// Update Organization Profile
const updateOrganizationProfile = async (organizationInfo) => {
  const formData = new FormData();
  for (const key in organizationInfo) {
    formData.append(key, organizationInfo[key]);
  }
  const { data } = await instance.put("/organization/profile", formData);
  return data;
};

// Get Organization by ID
const getOrganizationById = async (organizationId) => {
  const { data } = await instance.get(`/organization/${organizationId}`);
  return data;
};

// Delete Organization
const deleteOrganization = async (organizationId) => {
  const { data } = await instance.delete(
    `/organization/delete/${organizationId}`
  );
  return data;
};

// Event Endpoints
const createEvent = async (eventInfo) => {
  const { data } = await instance.post("/event/create", eventInfo);
  return data;
};

const getAllEvents = async () => {
  const { data } = await instance.get("/event/");
  return data;
};

const getMyEvents = async () => {
  const { data } = await instance.get("/event/my");
  return data;
};

const getEventById = async (eventId) => {
  const { data } = await instance.get(`/event/eventbyid/${eventId}`);
  return data;
};

const updateEvent = async (eventId, eventInfo) => {
  const { data } = await instance.put(
    `/event/updateevent/${eventId}`,
    eventInfo
  );
  return data;
};

const deleteEvent = async (eventId) => {
  const { data } = await instance.delete(`/event/deleteevent/${eventId}`);
  return data;
};

// Attends Endpoints
const requestToAttendEvent = async (eventId, requestInfo) => {
  const { data } = await instance.post(
    `/attend/${eventId}/request`,
    requestInfo
  );
  return data;
};

const handleAttendanceRequest = async (eventId, requestId, action) => {
  const { data } = await instance.post(
    `/attend/${eventId}/requests/${requestId}`,
    { action }
  );
  return data;
};

const markAttendance = async (eventId, userId) => {
  const { data } = await instance.post(
    `/attend/${eventId}/attendance/${userId}`
  );
  return data;
};

// Donations Endpoints
const getAllDonationLists = async () => {
  const { data } = await instance.get("/donation/list");
  return data;
};

const createDonationList = async (listInfo) => {
  const { data } = await instance.post("/donation/list", listInfo);
  return data;
};

const updateDonationList = async (listId, listInfo) => {
  const { data } = await instance.put(`/donation/list/${listId}`, listInfo);
  return data;
};

const deleteDonationList = async (listId) => {
  const { data } = await instance.delete(`/donation/list/${listId}`);
  return data;
};

const getAllDonationItems = async () => {
  const { data } = await instance.get("/donation");
  return data;
};

const createDonationItem = async (itemInfo) => {
  const { data } = await instance.post("/donation", itemInfo);
  return data;
};

const updateDonationItem = async (itemId, itemInfo) => {
  const { data } = await instance.put(`/donation/${itemId}`, itemInfo);
  return data;
};

const deleteDonationItem = async (itemId) => {
  const { data } = await instance.delete(`/donation/${itemId}`);
  return data;
};

// Receiver Endpoints
const getAllReceivers = async () => {
  const { data } = await instance.get("/receiver/");
  return data;
};

const createReceiver = async (receiverInfo) => {
  const { data } = await instance.post("/receiver/", receiverInfo);
  return data;
};

const updateReceiver = async (receiverId, receiverInfo) => {
  const { data } = await instance.put(`/receiver/${receiverId}`, receiverInfo);
  return data;
};

const deleteReceiver = async (receiverId) => {
  const { data } = await instance.delete(`/receiver/${receiverId}`);
  return data;
};

// QR Code Endpoints
const generateQRCode = async (eventId, userId) => {
  const { data } = await instance.get(
    `/api/generate-qrcode?eventid=${eventId}&userid=${userId}`
  );
  return data;
};

const readQRCode = async (eventId, userId) => {
  const { data } = await instance.get(
    `/attend?eventid=${eventId}&userid=${userId}`
  );
  return data;
};

export {
  signUp,
  signIn,
  getAllOrganizations,
  getOrganizationProfile,
  updateOrganizationProfile,
  getOrganizationById,
  deleteOrganization,
  createEvent,
  getAllEvents,
  getMyEvents,
  getEventById,
  updateEvent,
  deleteEvent,
  requestToAttendEvent,
  handleAttendanceRequest,
  markAttendance,
  getAllDonationLists,
  createDonationList,
  updateDonationList,
  deleteDonationList,
  getAllDonationItems,
  createDonationItem,
  updateDonationItem,
  deleteDonationItem,
  getAllReceivers,
  createReceiver,
  updateReceiver,
  deleteReceiver,
  generateQRCode,
  readQRCode,
};
