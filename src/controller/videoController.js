export const home = (req, res) => {
  return res.render("home", { pageTitle: "Home" });
};
export const watch = (req, res) => {
  const { id } = req.params;
  return res.render("watch", { pageTitle: `Watching ${video.title}` });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render("edit", { pageTitle: `Editings: ${video.title}` });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "upload video" });
};

export const postUpload = (req, res) => {
  const { title } = req.body;

  return res.redirect("/");
};

export const deleteVideo = (req, res) => res.send("Delete Video");
