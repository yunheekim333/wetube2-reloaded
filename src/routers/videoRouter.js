import express from "express";
import {
  watch,
  getEdit,
  postEdit,
  getUpload,
  postUpload,
} from "../controllers/videoController";

const videoRouter = express.Router();

// videoRouter.get("/upload", upload);
videoRouter.get("/:id(\\d+)", watch);
videoRouter.get("/:id(\\d+)/edit", getEdit);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
// videoRouter.post("/:id(\\+d)/edit", postEdit);
// videoRouter.get("/:id(\\+d)/delete", deleteVideo);

videoRouter.route("/upload").get(getUpload).post(postUpload);

export default videoRouter;
