const coursesJson = require ('./src/utils/jsonExample/Courses.json');
const internshipJson = require ('./src/utils/jsonExample/Internship.json');
const personnalInformationJson = require ('./src/utils/jsonExample/PersonnalInformation.json');
const marksJson = require ('./src/utils/jsonExample/Marks.json');


module.exports = () => {
    return {
        "student": [
            {
                "id": 1,
                "name": "Fname",
                "firstname": "Lname",
                "avatar": "https://thispersondoesnotexist.com/image"
            }
        ],
        "comments": [
            {
                "id": 1,
                "body": "some comment",
                "postId": 1
            }
        ],
        "profile": personnalInformationJson,
        "grades": marksJson,
        "internship": internshipJson,
        "courses": coursesJson
    };
};
