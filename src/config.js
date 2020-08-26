export default {
  s3: {
    REGION: "us-west-1",
    BUCKET: "notes-serverless-tutorial"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://9lufyv8f0f.execute-api.us-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_umRuG8ta7",
    APP_CLIENT_ID: "2odggp4nm5ffn7cdu47u3keqri",
    IDENTITY_POOL_ID: "us-west-2:c95829ca-c5dc-4ec1-bb58-0732d83cdbfb"
  }
};