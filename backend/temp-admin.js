const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/User');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log('MongoDB Connected');
  
  try {
    // First, show all users
    const users = await User.find({});
    console.log('\n📋 All registered users:');
    users.forEach((user, index) => {
      console.log(`${index + 1}. ${user.name} - ${user.email} (${user.user_type})`);
    });
    
    if (users.length === 0) {
      console.log('❌ No users found. Please register a user first.');
      process.exit(0);
    }
    
    // Update the first user to admin (you can change this)
    const firstUser = users[0];
    const result = await User.updateOne(
      { _id: firstUser._id }, 
      { $set: { user_type: "admin" } }
    );
    
    if (result.matchedCount > 0) {
      console.log(`\n✅ ${firstUser.name} (${firstUser.email}) is now an admin!`);
      console.log('🔑 You can now access the admin panel at: http://localhost:5173/admin');
      console.log('💡 Make sure to logout and login again to refresh your admin privileges.');
    }
    
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}).catch((error) => {
  console.error('Database connection error:', error);
  process.exit(1);
});
