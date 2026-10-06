// বাটনে ক্লিক করলে
document.getElementById('btn').addEventListener('click', function() {
  document.getElementById('msg').textContent = '✅ জাভাস্ক্রিপ্ট কাজ করছে!';
});

// আজকের তারিখ দেখানো
const today = new Date();
const options = { 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric', 
  weekday: 'long' 
};
document.getElementById('date').textContent = 
  today.toLocaleDateString('bn-BD', options);
