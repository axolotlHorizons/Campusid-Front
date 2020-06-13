const coursesJson = require('./src/utils/jsonExample/Courses.json');
const internshipJson = require('./src/utils/jsonExample/Internship.json');
const personnalInformationJson = require('./src/utils/jsonExample/PersonnalInformation.json');
const marksJson = require('./src/utils/jsonExample/Marks.json');
const trombinoscope = require('./src/utils/jsonExample/Trombinoscope.json');

module.exports = () => {
    return {
        student: [
            {
                id: 1,
                classId: 1,
                lastname: 'Lastname',
                firstname: 'Firstname',
                avatar: 'https://thispersondoesnotexist.com/image',
                email: 'test1@campusid.eu',
                password: '1234',
                role: 'student',
            },
        ],
        comments: [
            {
                id: 1,
                body: 'some comment',
                postId: 1,
            },
        ],
        profile: personnalInformationJson,
        grades: marksJson,
        internship: internshipJson,
        courses: coursesJson,
        trombinoscope: trombinoscope,
    };
};
