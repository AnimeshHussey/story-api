import {
  createStory,
  getallStories,
  updateStory,
  deleteStorybyID,
} from "./storyPlanningController";

export const storyPlanningApi = (app) => {
  app.post("/api/addStory", (req, res) => {
    if (req.body) {
      createStory(req.body).then(
        (result) => {
          res.send(Object.assign({}, result._doc, { postCreated: true }));
        },
        (error) => {
          console.log(error);
          res.send({ postCreated: false });
        }
      );
    } else {
      res.send({ postCreated: false });
    }
  });

  app.get("/api/getAllStories", (req, res) => {
    getallStories().then(
      (result) => {
        res.send(result);
      },
      (error) => {
        res.send(error);
      }
    );
  });

  app.put("/api/updateStory", (req, res) => {
    updateStory(req.body).then(
      (result) => {
        res.send(result);
      },
      (error) => {
        res.send(error);
      }
    );
  });

  app.delete("/api/deleteStory/:id", (req, res) => {
    deleteStorybyID(req.params.id).then(
      (result) => {
        res.send(result);
      },
      (error) => {
        res.send(error);
      }
    );
  });
};
