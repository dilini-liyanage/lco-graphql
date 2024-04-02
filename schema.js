import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Course {
        id: ID
        courseName: String
        category: String
        price: Int
        language: String
        email: String
        stack : Stack
        teachingAssists : [TeachingAssist]
    }

    type TeachingAssist {
        name: String,
        experince: Int
    }

    enum Stack {
        WEB
        MOBILE
        OTHER
    }

    type Query {
        getCourse(id: ID): Course
    }

    input courseInput {
        id: ID
        courseName: String!
        category: String
        price: Int!
        language: String
        email: String
        stack : Stack
        teachingAssists : [TeachingAssistInput]
    }

    input TeachingAssistInput {
        name: String,
        experince: Int
    }

    type Mutation {
        createCourse(input: courseInput): Course
    }
`); 

export default schema;