 /**
 * @author doguhanbabuur@hotmail.com (Doğuhan Babur)
 */

import ObjectDetectedModel from '../object-models/object-model';

export const getDetectedObjectsByVideo = (req, res) => {
    const { videoId } = req.params;
    ObjectDetectedModel.fetchById(videoId)
        .then(([queryRows, queryFields]) => {
            res.status(200).json(queryRows);
        })
        .catch(err => {
            res.status(400).json(err);
        });
}