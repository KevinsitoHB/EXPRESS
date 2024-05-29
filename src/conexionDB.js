import mongoose from 'mongoose';

mongoose
  .connect(process.env.MONGODB_ATLAS_URI)
  .then((dato) => {
    console.log('Connected mongoose');
  })
  .catch((error) => {
    console.log('Not Connected mongoose: ', error);
  });
