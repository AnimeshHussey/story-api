import Story from "../../models/story";

export const createStory = (objStory) => {
  return new Promise((resolve, reject) => {
    const newStory = new Story({
      description: objStory.description,
      storypoint: objStory.storypoint,
      status: objStory.status,
      createdAt: new Date(),
      updatedAt: new Date(),
      assignedTo: objStory.assignedTo,
      status: objStory.status,
    });
    newStory.save((error) => {
      if (error) {
        console.log(error);
        reject(error);
      }
      resolve(newStory);
    });
  });
};

export const updateStory = (objStory) => {
  return new Promise((resolve, reject) => {
    const updatedStory = {
      description: objStory.description,
      storypoint: objStory.storypoint,
      status: objStory.status,
      createdAt: objStory.createdAt,
      assignedTo: objStory.assignedTo,
      updatedAt: objStory.updatedAt,
    };
    Story.findByIdAndUpdate(
      { _id: objStory._id },
      { $set: updatedStory },
      { upsert: true },
      (error, doc) => {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          resolve(doc);
        }
      }
    );
  });
};

export const getallStories = () => {
  return new Promise((resolve, reject) => {
    Story.find({}).exec((error, results) => {
      if (error) {
        console.log(error);
        reject(error);
      } else if (!results) reject(null);
      else resolve(results);
    });
  });
};

export const deleteStorybyID = (id) => {
  return new Promise((resolve, reject) => {
    Story.deleteOne({ _id: id }).exec((error, results) => {
      if (error) {
        console.log(error);
        reject(error);
      } else if (!results) reject(null);
      else resolve(results);
    });
  });
};
