# 🚗 UK Driving Theory Test Platform

A complete, interactive practice platform for the UK car driving theory test with **681 questions** across **14 topics**.

## ✨ Features

### Core Functionality
- ✅ **681 Questions** with correct answers and detailed explanations
- ✅ **14 Complete Topics** covering all UK driving theory areas
- ✅ **One Question at a Time** - focused learning experience
- ✅ **Instant Feedback** - green for correct, red for incorrect
- ✅ **Progress Tracking** - see how much you've completed
- ✅ **Results Page** - comprehensive score and statistics

### Advanced Features
- 🔊 **Voice-Over (Text-to-Speech)** - listen to questions and explanations
- 📝 **Personal Notes** - add notes to any question
- 🚩 **Flag System** - mark difficult questions for review
- ▶️ **Auto-play Mode** - automatic progression through questions
- 💾 **Progress Saved** - your progress is automatically saved
- 📱 **Mobile Responsive** - works perfectly on all devices

### Beautiful Design
- 💜 Purple gradient theme
- 🎨 Modern, clean interface
- ⚡ Fast loading
- 🌊 Smooth animations
- 📊 Real-time progress bars

## 📁 Project Structure

```
uk-cartheory-classroom/
├── index.html                           # Main dashboard
├── topics/                              # Quiz pages
│   ├── vulnerable-road-users.html       # 67 questions
│   ├── road-and-traffic-signs.html      # 187 questions ⭐
│   ├── rules-of-the-road.html           # 61 questions
│   ├── safety-and-your-vehicle.html     # 62 questions
│   ├── motorway-rules.html              # 49 questions
│   ├── hazard-awareness.html            # 18 questions
│   ├── incidents-accidents-emergencies.html  # 45 questions
│   ├── vehicle-handling.html            # 41 questions
│   ├── safety-margins.html              # 28 questions
│   ├── attitude.html                    # 37 questions
│   ├── video-questions.html             # 25 questions
│   ├── essential-documents.html         # 24 questions
│   ├── other-types-of-vehicle.html      # 19 questions
│   └── vehicle-loading.html             # 18 questions
├── data/                                # Question data
│   ├── vulnerable_road_users_complete.json
│   ├── road_and_traffic_signs_complete.json
│   ├── rules_of_the_road_complete.json
│   ├── safety_and_your_vehicle_complete.json
│   ├── motorway_rules_complete.json
│   ├── hazard_awareness_complete.json
│   ├── incidents_accidents_and_emergencies_complete.json
│   ├── vehicle_handling_complete.json
│   ├── safety_margins_complete.json
│   ├── attitude_complete.json
│   ├── video_questions_complete.json
│   ├── essential_documents_complete.json
│   ├── other_types_of_vehicle_complete.json
│   └── vehicle_loading_complete.json
└── README.md                            # This file
```

## 🚀 Deployment to GitHub Pages

### Current Setup
Your GitHub repository is already configured for GitHub Pages:
- **Repository:** https://github.com/Baaz-Smaeday/uk-cartheory-classroom
- **Live Site:** https://baaz-smaeday.github.io/uk-cartheory-classroom/

### How to Deploy

1. **Upload Files to GitHub:**
   ```bash
   # Navigate to your repository
   cd uk-cartheory-classroom
   
   # Add all files
   git add .
   
   # Commit changes
   git commit -m "Add complete UK theory test platform with 681 questions"
   
   # Push to GitHub
   git push origin main
   ```

2. **Access Your Site:**
   - Main Dashboard: `https://baaz-smaeday.github.io/uk-cartheory-classroom/index.html`
   - Or directly: `https://baaz-smaeday.github.io/uk-cartheory-classroom/`

3. **That's it!** GitHub Pages will automatically serve your site.

## 🎓 How to Use

### For Students

1. **Start Learning:**
   - Visit the main dashboard
   - Choose any of the 14 topics
   - Click "Start Quiz" to begin

2. **Take a Quiz:**
   - Read each question carefully
   - Select your answer (A, B, C, or D)
   - Click "Check Answer" to see if you're correct
   - Read the explanation to learn why
   - Click "Next Question" to continue

3. **Use Advanced Features:**
   - **Voice-Over:** Click "🔊 Voice: OFF" to turn on text-to-speech
   - **Auto-play:** Enable to automatically move to next question
   - **Flag Questions:** Click the 🚩 icon to flag difficult questions
   - **Add Notes:** Click the 📝 icon to add personal notes
   - **View Flagged:** Click "🚩 View Flagged" to see all flagged questions

4. **Track Progress:**
   - Your progress is automatically saved
   - View completion percentage on the dashboard
   - See your scores for each topic
   - Review incorrect answers anytime

### For Teachers

1. **Monitor Progress:**
   - Students' progress is saved locally on their devices
   - Use the dashboard to see overall completion rates
   - Future versions will include a teacher dashboard

## 📊 Topics Covered

| Topic | Questions | Description |
|-------|-----------|-------------|
| Vulnerable Road Users | 67 | Pedestrians, cyclists, motorcyclists, horse riders |
| Road and Traffic Signs | 187 | All UK road signs and their meanings |
| Rules of the Road | 61 | Speed limits, right of way, road markings |
| Safety and Your Vehicle | 62 | Vehicle maintenance, MOT, insurance |
| Motorway Rules | 49 | Motorway driving, lane discipline, speed limits |
| Hazard Awareness | 18 | Identifying and responding to hazards |
| Incidents & Emergencies | 45 | Accidents, breakdowns, first aid |
| Vehicle Handling | 41 | Driving in different conditions |
| Safety Margins | 28 | Following distances, stopping distances |
| Attitude | 37 | Considerate driving, road rage |
| Video Questions | 25 | Scenario-based questions |
| Essential Documents | 24 | Licenses, insurance, MOT certificates |
| Other Types of Vehicle | 19 | Large vehicles, buses, motorcycles |
| Vehicle Loading | 18 | Roof racks, trailers, weight limits |

**Total: 681 Questions**

## 💾 Data Storage

### Local Storage
The platform uses browser localStorage to save:
- Quiz progress per topic
- Flagged questions
- Personal notes
- Completion status
- Scores

### Privacy
- All data stays on the student's device
- No data is sent to any server
- Students can clear data using "Reset Progress" button

## 🎨 Customization

### Changing Colors
Edit the CSS in `index.html` or quiz pages:
```css
/* Purple gradient - change to your preferred colors */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Adding More Questions
1. Create a new JSON file in the `data/` folder
2. Follow the existing format:
```json
{
  "number": 1,
  "text": "Question text here?",
  "options": {
    "A": "Option A text",
    "B": "Option B text",
    "C": "Option C text",
    "D": "Option D text"
  },
  "correct": "A",
  "explanation": "Explanation of why A is correct."
}
```
3. Create a new quiz page or add to existing topic

## 🔧 Technical Details

### Technologies Used
- **HTML5** - Structure
- **CSS3** - Styling with animations
- **JavaScript (Vanilla)** - Quiz logic and interactivity
- **Web Speech API** - Text-to-speech functionality
- **LocalStorage API** - Data persistence

### Browser Compatibility
- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

### Performance
- Fast loading (no external dependencies)
- Smooth animations
- Responsive design
- Works offline after first load

## 📱 Mobile Support

The platform is fully responsive and works great on:
- 📱 Mobile phones
- 📱 Tablets
- 💻 Laptops
- 🖥️ Desktops

## 🆘 Support & Troubleshooting

### Common Issues

**Quiz won't load:**
- Check that JSON files are in the `data/` folder
- Make sure file paths are correct
- Check browser console for errors

**Voice-over not working:**
- Check browser compatibility (Web Speech API)
- Ensure volume is turned up
- Try refreshing the page

**Progress not saving:**
- Check if localStorage is enabled in browser
- Clear browser cache and try again
- Make sure cookies aren't blocked

**Quiz pages return 404:**
- Verify files are uploaded to GitHub
- Check file paths match
- Wait a few minutes for GitHub Pages to update

## 🚀 Future Enhancements

Potential features to add:
- [ ] Timed test mode (like real test)
- [ ] Practice mode with randomized questions
- [ ] Detailed analytics dashboard
- [ ] Student login system
- [ ] Teacher dashboard
- [ ] Export progress reports
- [ ] Dark mode
- [ ] Multiple language support
- [ ] Alertness topic (when file is available)

## 📝 License

This project is for educational purposes to help students prepare for the UK driving theory test.

## 🎉 Acknowledgments

- Questions based on official UK driving theory test content
- Built with ❤️ for students preparing for their driving test
- Special thanks to all contributors

## 📞 Contact

For questions, suggestions, or issues:
- GitHub: https://github.com/Baaz-Smaeday/uk-cartheory-classroom
- Create an issue on GitHub for technical problems
- Submit a pull request for improvements

---

**Good luck with your theory test! 🚗💨**

Remember: The more you practice, the more confident you'll be on test day!
