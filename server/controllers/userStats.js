// controllers/statsController.js
import User from "../model/userModel.js";

// Controller function to get statistics about users
export const getUserStats = async (req, res) => {
  try {
    // Perform MongoDB aggregation to get user statistics
    const aggregationResult = await User.aggregate([
      {
        $group: {
          _id: null,
          totalUsers: { $sum: 1 },
          averageAge: { $avg: "$age" },
          usersByCountry: {
            $push: {
              country: "$country",
              count: 1,
            },
          },
        },
      },
      {
        $unwind: "$usersByCountry",
      },
      {
        $group: {
          _id: "$usersByCountry.country",
          totalUsers: { $sum: "$usersByCountry.count" },
          averageAge: { $avg: "$age" },
        },
      },
    ]).exec();

    // Respond with the aggregation result (user statistics)
    res.json(aggregationResult);
  } catch (error) {
    // Handle any errors during the aggregation process
    res.status(500).json({ error: error.message });
  }
};
