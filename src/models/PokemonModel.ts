import * as dynamoose from "dynamoose";

dynamoose.aws.sdk.config.update({
  region: "local",
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
});

dynamoose.aws.ddb.local();

const pokeSchema = new dynamoose.Schema(
  {
    id: {
      type: String,
      hashKey: true,
    },
    name: {
      type: String,
    },
    type: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default dynamoose.model("Pokemon", pokeSchema);
