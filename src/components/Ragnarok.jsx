import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const phases = [
  {
    title: "The Mjolnir",
    description: "This chapter is all about forging raw strength with brutally dedicated conviction. Inspired by the legendary hammer of Thor, this phase will build your foundation with heavy lifts and relentless intensity. This phase is all about going hard, and going heavy. The structure will build a robust foundation with a perfect balance of dominance and recovery. Unleash the thunder with sheer power and strength. Embrace the grind and let your power surge.",
    table: (
      <div className="overflow-x-auto mb-4">
        <h2 className="text-2xl sm:text-4xl font-bold mb-4">ᚨ</h2>
        <div className="min-w-full overflow-x-auto">
          <table className="min-w-full text-left overflow-hidden text-sm sm:text-base">
            <thead>
              <tr>
                <th className="bg-white text-black font-bold px-2 sm:px-4 py-2">Exercise</th>
                <th className="bg-white text-black font-bold px-2 sm:px-4 py-2">Sets/Rounds</th>
                <th className="bg-white text-black font-bold px-2 sm:px-4 py-2"><div className="skew-right">Reps</div></th>
              </tr>
            </thead>
            <tbody>
              <tr className="skew-row">
                <td className="px-2 sm:px-4 py-2">Barbell Squats</td>
                <td className="px-2 sm:px-4 py-2">4 Sets</td>
                <td className="px-2 sm:px-4 py-2 pr-4 sm:pr-10">5-6 Reps</td>
              </tr>
              <tr className="skew-row">
                <td className="px-2 sm:px-4 py-2">Deadlifts</td>
                <td className="px-2 sm:px-4 py-2">4 Sets</td>
                <td className="px-2 sm:px-4 py-2 pr-4 sm:pr-10">5-6 Reps</td>
              </tr>
              <tr className="skew-row">
                <td className="px-2 sm:px-4 py-2">Weighted Pull-ups</td>
                <td className="px-2 sm:px-4 py-2">4 Sets</td>
                <td className="px-2 sm:px-4 py-2 pr-4 sm:pr-10">5-6 Reps</td>
              </tr>
              <tr className="skew-row">
                <td className="px-2 sm:px-4 py-2">Ring Dips</td>
                <td className="px-2 sm:px-4 py-2">4 Sets</td>
                <td className="px-2 sm:px-4 py-2 pr-4 sm:pr-10">5-6 Reps</td>
              </tr>
              <tr className="skew-row">
                <td className="px-2 sm:px-4 py-2">Overhead Carries</td>
                <td className="px-2 sm:px-4 py-2">4 Rounds</td>
                <td className="px-2 sm:px-4 py-2"></td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th className="bg-white text-black font-bold px-2 sm:px-4 py-2" colSpan="3">Cardio</th>
              </tr>
              <tr className='skew-row'>
                <td className="px-2 sm:px-4 py-2">Rowing</td>
                <td className="px-2 sm:px-4 py-2" colSpan="2">Duration: 15 mins</td>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <td className="px-2 sm:px-4 py-2" colSpan="3">
                  <p className="text-xs sm:text-sm text-gray-400">Rest 3-4 minutes between sets. Focus on form and control. Aim for progressive overload.</p>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        
        <br/><br/>
        <h2 className="text-2xl sm:text-4xl font-bold mb-4">ᛒ</h2>
        <div className="min-w-full overflow-x-auto">
          <table className="min-w-full text-left overflow-hidden text-sm sm:text-base">
            <thead>
              <tr>
                <th className="bg-white text-black font-bold px-2 sm:px-4 py-2">Exercise</th>
                <th className="bg-white text-black font-bold px-2 sm:px-4 py-2">Sets/Rounds</th>
                <th className="bg-white text-black font-bold px-2 sm:px-4 py-2"><div className="skew-right">Reps</div></th>
              </tr>
            </thead>
            <tbody>
              <tr className="skew-row">
                <td className="px-2 sm:px-4 py-2">Weighted Pistol Squats</td>
                <td className="px-2 sm:px-4 py-2">4 Sets</td>
                <td className="px-2 sm:px-4 py-2 pr-4 sm:pr-10">5-6 Reps</td>
              </tr>
              <tr className="skew-row">
                <td className="px-2 sm:px-4 py-2">Loaded Back Extensions</td>
                <td className="px-2 sm:px-4 py-2">4 Sets</td>
                <td className="px-2 sm:px-4 py-2 pr-4 sm:pr-10">5-6 Reps</td>
              </tr>
              <tr className="skew-row">
                <td className="px-2 sm:px-4 py-2">Barbell Rows</td>
                <td className="px-2 sm:px-4 py-2">4 Sets</td>
                <td className="px-2 sm:px-4 py-2 pr-4 sm:pr-10">5-6 Reps</td>
              </tr>
              <tr className="skew-row">
                <td className="px-2 sm:px-4 py-2">Overhead Press</td>
                <td className="px-2 sm:px-4 py-2">4 Sets</td>
                <td className="px-2 sm:px-4 py-2 pr-4 sm:pr-10">5-6 Reps</td>
              </tr>
              <tr className="skew-row">
                <td className="px-2 sm:px-4 py-2">Farmer Carries</td>
                <td className="px-2 sm:px-4 py-2">4 Rounds</td>
                <td className="px-2 sm:px-4 py-2"></td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th className="bg-white text-black font-bold px-2 sm:px-4 py-2" colSpan="3">Cardio</th>
              </tr>
              <tr className='skew-row'>
                <td className="px-2 sm:px-4 py-2">Rowing</td>
                <td className="px-2 sm:px-4 py-2" colSpan="2">Duration: 15 mins</td>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <td className="px-2 sm:px-4 py-2" colSpan="3">
                  <p className="text-xs sm:text-sm text-gray-400">Rest 3-4 minutes between sets. Focus on form and control. Aim for progressive overload.</p>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <br />
        <h4 className='text-sm sm:text-lg text-left mb-4'>Week 1: ᚨ &rarr; ᛒ &rarr; ᚨ</h4>
        <h4 className='text-sm sm:text-lg text-left mb-4'>Week 2: ᛒ &rarr; ᚨ &rarr; ᛒ</h4>
      </div>
    )
  },
  {
    title: "The Gungnir",
    description: "Unbridle the calibre of your body and mind. This phase is about relentless intensity and pushing past your limits. Embrace the chaos and let your willpower reign. This phase is inspired by Odin's spear, Gungnir, symbolizing precision and power. Refine your body with the precision of a warrior's weapon. Focused on hypertrophy, movement quality, control and joint resilience, this phase will challenge your limits, enhance your potential and build your mental fortitude. Embrace the fury and let your strength pierce through any obstacle.",
    table: (
      <div className="overflow-x-auto mb-4">
        <h2 className="text-2xl sm:text-4xl font-bold mb-4">ᚨ</h2>
        <div className="min-w-full overflow-x-auto">
          <table className="min-w-full text-left overflow-hidden text-sm sm:text-base">
            <thead>
              <tr>
                <th className="bg-white text-black font-bold px-2 sm:px-4 py-2">Exercise</th>
                <th className="bg-white text-black font-bold px-2 sm:px-4 py-2">Sets/Rounds</th>
                <th className="bg-white text-black font-bold px-2 sm:px-4 py-2"><div className="skew-right">Reps</div></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="bg-gray-300 text-black font-bold px-2 sm:px-4 py-2" colSpan="3">Giant Set 1:</th>
              </tr>
              <tr className="skew-row">
                <td className="px-2 sm:px-4 py-2">Pull-ups</td>
                <td className="px-2 sm:px-4 py-2">3 Sets</td>
                <td className="px-2 sm:px-4 py-2 pr-4 sm:pr-10">5-6 Reps</td>
              </tr>
              <tr className="skew-row">
                <td className="px-2 sm:px-4 py-2">Straight/Parallel Bar dips</td>
                <td className="px-2 sm:px-4 py-2">3 Sets</td>
                <td className="px-2 sm:px-4 py-2 pr-4 sm:pr-10">5-6 Reps</td>
              </tr>
              <tr className="skew-row">
                <td className="px-2 sm:px-4 py-2">Leg Extensions</td>
                <td className="px-2 sm:px-4 py-2">3 Sets</td>
                <td className="px-2 sm:px-4 py-2 pr-4 sm:pr-10">5-6 Reps</td>
              </tr>
              <tr>
                <th className="bg-gray-300 text-black font-bold px-2 sm:px-4 py-2" colSpan="3">Giant Set 2:</th>
              </tr>
              <tr className="skew-row">
                <td className="px-2 sm:px-4 py-2">Cable Rows</td>
                <td className="px-2 sm:px-4 py-2">3 Sets</td>
                <td className="px-2 sm:px-4 py-2 pr-4 sm:pr-10">5-6 Reps</td>
              </tr>
              <tr className="skew-row">
                <td className="px-2 sm:px-4 py-2">Incline Bench Press</td>
                <td className="px-2 sm:px-4 py-2">3 Sets</td>
                <td className="px-2 sm:px-4 py-2 pr-4 sm:pr-10">5-6 Reps</td>
              </tr>
              <tr className="skew-row">
                <td className="px-2 sm:px-4 py-2">Hamstring Curls</td>
                <td className="px-2 sm:px-4 py-2">3 Sets</td>
                <td className="px-2 sm:px-4 py-2 pr-4 sm:pr-10">5-6 Reps</td>
              </tr>
              <tr>
                <th className="bg-gray-300 text-black font-bold px-2 sm:px-4 py-2" colSpan="3">Finisher</th>
              </tr>
              <tr className="skew-row">
                <td className="px-2 sm:px-4 py-2">Rear Delt Flies</td>
                <td className="px-2 sm:px-4 py-2">3 sets</td>
                <td className="px-2 sm:px-4 py-2 pr-4 sm:pr-10">5 Reps</td>
              </tr>
              <tr>
                <th className="bg-gray-300 text-black font-bold px-2 sm:px-4 py-2" colSpan="3">Isolation</th>
              </tr>
              <tr className="skew-row">
                <td className="px-2 sm:px-4 py-2">Tricep Pushdowns</td>
                <td className="px-2 sm:px-4 py-2">2 sets</td>
                <td className="px-2 sm:px-4 py-2 pr-4 sm:pr-10">5 Reps</td>
              </tr>
              <tr className="skew-row">
                <td className="px-2 sm:px-4 py-2">Dumbbell Lu Raises</td>
                <td className="px-2 sm:px-4 py-2">2 Sets</td>
                <td className="px-2 sm:px-4 py-2 pr-4 sm:pr-10">5 Reps</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th className="bg-white text-black font-bold px-2 sm:px-4 py-2" colSpan="3">Cardio</th>
              </tr>
              <tr className='skew-row'>
                <td className="px-2 sm:px-4 py-2">Rowing</td>
                <td className="px-2 sm:px-4 py-2" colSpan="2">Duration: 15 mins</td>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <td className="px-2 sm:px-4 py-2" colSpan="3">
                  <p className="text-xs sm:text-sm text-gray-400">Rest 3-4 minutes between sets. Focus on form and control. Aim for progressive overload.</p>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        
        <br/><br/>
        <h2 className="text-2xl sm:text-4xl font-bold mb-4">ᛒ</h2>
        <div className="min-w-full overflow-x-auto">
          <table className="min-w-full text-left overflow-hidden text-sm sm:text-base">
            <thead>
              <tr>
                <th className="bg-white text-black font-bold px-2 sm:px-4 py-2">Exercise</th>
                <th className="bg-white text-black font-bold px-2 sm:px-4 py-2">Sets/Rounds</th>
                <th className="bg-white text-black font-bold px-2 sm:px-4 py-2"><div className="skew-right">Reps</div></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="bg-gray-300 text-black font-bold px-2 sm:px-4 py-2" colSpan="3">Giant Set 1:</th>
              </tr>
              <tr className="skew-row">
                <td className="px-2 sm:px-4 py-2">Weighted Pushups</td>
                <td className="px-2 sm:px-4 py-2">3 Sets</td>
                <td className="px-2 sm:px-4 py-2 pr-4 sm:pr-10">5-6 Reps</td>
              </tr>
              <tr className="skew-row">
                <td className="px-2 sm:px-4 py-2">Lat Pulldowns</td>
                <td className="px-2 sm:px-4 py-2">3 Sets</td>
                <td className="px-2 sm:px-4 py-2 pr-4 sm:pr-10">5-6 Reps</td>
              </tr>
              <tr className="skew-row">
                <td className="px-2 sm:px-4 py-2">Walking Lunges</td>
                <td className="px-2 sm:px-4 py-2">3 Sets</td>
                <td className="px-2 sm:px-4 py-2 pr-4 sm:pr-10">5-6 Reps</td>
              </tr>
              <tr>
                <th className="bg-gray-300 text-black font-bold px-2 sm:px-4 py-2" colSpan="3">Giant Set 2:</th>
              </tr>
              <tr className="skew-row">
                <td className="px-2 sm:px-4 py-2">Dumbbell Shoulder Press</td>
                <td className="px-2 sm:px-4 py-2">3 Sets</td>
                <td className="px-2 sm:px-4 py-2 pr-4 sm:pr-10">5-6 Reps</td>
              </tr>
              <tr className="skew-row">
                <td className="px-2 sm:px-4 py-2">Frontlever Pulls</td>
                <td className="px-2 sm:px-4 py-2">3 Sets</td>
                <td className="px-2 sm:px-4 py-2 pr-4 sm:pr-10">5-6 Reps</td>
              </tr>
              <tr className="skew-row">
                <td className="px-2 sm:px-4 py-2">Romanian Deadlifts</td>
                <td className="px-2 sm:px-4 py-2">3 Sets</td>
                <td className="px-2 sm:px-4 py-2 pr-4 sm:pr-10">5-6 Reps</td>
              </tr>
              <tr>
                <th className="bg-gray-300 text-black font-bold px-2 sm:px-4 py-2" colSpan="3">Finisher</th>
              </tr>
              <tr className="skew-row">
                <td className="px-2 sm:px-4 py-2">Cable Chest flies</td>
                <td className="px-2 sm:px-4 py-2">3 sets</td>
                <td className="px-2 sm:px-4 py-2 pr-4 sm:pr-10">5 Reps</td>
              </tr>
              <tr>
                <th className="bg-gray-300 text-black font-bold px-2 sm:px-4 py-2" colSpan="3">Isolation</th>
              </tr>
              <tr className="skew-row">
                <td className="px-2 sm:px-4 py-2">Bicep Curls</td>
                <td className="px-2 sm:px-4 py-2">2 sets</td>
                <td className="px-2 sm:px-4 py-2 pr-4 sm:pr-10">5 Reps</td>
              </tr>
              <tr className="skew-row">
                <td className="px-2 sm:px-4 py-2">Dumbbell Lateral Raises</td>
                <td className="px-2 sm:px-4 py-2">2 Sets</td>
                <td className="px-2 sm:px-4 py-2 pr-4 sm:pr-10">5 Reps</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th className="bg-white text-black font-bold px-2 sm:px-4 py-2" colSpan="3">Cardio</th>
              </tr>
              <tr className='skew-row'>
                <td className="px-2 sm:px-4 py-2">Jump Rope</td>
                <td className="px-2 sm:px-4 py-2" colSpan="2">Duration: 10 mins</td>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <td className="px-2 sm:px-4 py-2" colSpan="3">
                  <p className="text-xs sm:text-sm text-gray-400">Rest 3-4 minutes between sets. Focus on form and control. Aim for progressive overload.</p>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <br />
        <h4 className='text-sm sm:text-lg text-left mb-4'>Week 3: ᚨ &rarr; ᛒ &rarr; ᚨ</h4>
        <h4 className='text-sm sm:text-lg text-left mb-4'>Week 4: ᛒ &rarr; ᚨ &rarr; ᛒ</h4>
      </div>
    )
  },
  {
    title: "The Skofnung",
    description: "Named after the legendary sword Skofnung – sharp, swift, and feared – this phase is built on endurance, precision, and discipline. It's not about brute strength – it's about lasting through the burn, rep after rep, set after set. You'll sharpen your resilience, amplify work capacity, and condition your body to endure and recover with relentless pace. Like Skofnung's edge, you will become efficient, unyielding, and forged for the long war. This is the grind where champions are tempered.",
    table: (
      <div className="overflow-x-auto mb-4">
        <h2 className="text-2xl sm:text-4xl font-bold mb-4">ᚨ</h2>
        <div className="min-w-full overflow-x-auto">
          <table className="min-w-full text-left overflow-hidden text-sm sm:text-base">
            <thead>
              <tr>
                <th className="bg-white text-black font-bold px-2 sm:px-4 py-2">Exercise</th>
                <th className="bg-white text-black font-bold px-2 sm:px-4 py-2">Sets/Rounds</th>
                <th className="bg-white text-black font-bold px-2 sm:px-4 py-2"><div className="skew-right">Reps</div></th>
              </tr>
            </thead>
            <tbody>
              <tr className="skew-row">
                <td className="px-2 sm:px-4 py-2">Lat Pulldowns</td>
                <td className="px-2 sm:px-4 py-2">2 Sets</td>
                <td className="px-2 sm:px-4 py-2 pr-4 sm:pr-10">5-6 Reps</td>
              </tr>
              <tr className="skew-row">
                <td className="px-2 sm:px-4 py-2">Goblet Squats</td>
                <td className="px-2 sm:px-4 py-2">2 Sets</td>
                <td className="px-2 sm:px-4 py-2 pr-4 sm:pr-10">5-6 Reps</td>
              </tr>
              <tr className="skew-row">
                <td className="px-2 sm:px-4 py-2">Dumbbell Shoulder Press</td>
                <td className="px-2 sm:px-4 py-2">2 Sets</td>
                <td className="px-2 sm:px-4 py-2 pr-4 sm:pr-10">5-6 Reps</td>
              </tr>
              <tr className="skew-row">
                <td className="px-2 sm:px-4 py-2">Kettlebell Swings</td>
                <td className="px-2 sm:px-4 py-2">2 Sets</td>
                <td className="px-2 sm:px-4 py-2 pr-4 sm:pr-10">5-6 Reps</td>
              </tr>
              <tr className="skew-row">
                <td className="px-2 sm:px-4 py-2">Cable rows</td>
                <td className="px-2 sm:px-4 py-2">2 Sets</td>
                <td className="px-2 sm:px-4 py-2 pr-4 sm:pr-10">5-6 Reps</td>
              </tr>
              <tr>
                <th className="bg-gray-300 text-black font-bold px-2 sm:px-4 py-2" colSpan="3">Isolation</th>
              </tr>
              <tr className="skew-row">
                <td className="px-2 sm:px-4 py-2">Toes-to-Bar</td>
                <td className="px-2 sm:px-4 py-2">2 sets</td>
                <td className="px-2 sm:px-4 py-2 pr-4 sm:pr-10">10-15 Reps</td>
              </tr>
              <tr className="skew-row">
                <td className="px-2 sm:px-4 py-2">Windshield Wipers</td>
                <td className="px-2 sm:px-4 py-2">2 Sets</td>
                <td className="px-2 sm:px-4 py-2 pr-4 sm:pr-10">16-20 Reps</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th className="bg-white text-black font-bold px-2 sm:px-4 py-2" colSpan="3">Cardio</th>
              </tr>
              <tr className='skew-row'>
                <td className="px-2 sm:px-4 py-2">Rowing</td>
                <td className="px-2 sm:px-4 py-2" colSpan="2">Duration: 15 mins</td>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <td className="px-2 sm:px-4 py-2" colSpan="3">
                  <p className="text-xs sm:text-sm text-gray-400">Rest 3-4 minutes between sets. Focus on form and control. Aim for progressive overload.</p>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <br/><br/>
        
        <h2 className="text-2xl sm:text-4xl font-bold mb-4">ᛒ</h2>
        <div className="min-w-full overflow-x-auto">
          <table className="min-w-full text-left overflow-hidden text-sm sm:text-base">
            <thead>
              <tr>
                <th className="bg-white text-black font-bold px-2 sm:px-4 py-2">Exercise</th>
                <th className="bg-white text-black font-bold px-2 sm:px-4 py-2">Sets/Rounds</th>
                <th className="bg-white text-black font-bold px-2 sm:px-4 py-2"><div className="skew-right">Reps</div></th>
              </tr>
            </thead>
            <tbody>
              <tr className="skew-row">
                <td className="px-2 sm:px-4 py-2">Dumbbell Bench Press</td>
                <td className="px-2 sm:px-4 py-2">2 Sets</td>
                <td className="px-2 sm:px-4 py-2 pr-4 sm:pr-10">5-6 Reps</td>
              </tr>
              <tr className="skew-row">
                <td className="px-2 sm:px-4 py-2">Explosive Lunges</td>
                <td className="px-2 sm:px-4 py-2">2 Sets</td>
                <td className="px-2 sm:px-4 py-2 pr-4 sm:pr-10">5-6 Reps</td>
              </tr>
              <tr className="skew-row">
                <td className="px-2 sm:px-4 py-2">Inverted Rows</td>
                <td className="px-2 sm:px-4 py-2">2 Sets</td>
                <td className="px-2 sm:px-4 py-2 pr-4 sm:pr-10">5-6 Reps</td>
              </tr>
              <tr className="skew-row">
                <td className="px-2 sm:px-4 py-2">Hamstring Curls</td>
                <td className="px-2 sm:px-4 py-2">2 Sets</td>
                <td className="px-2 sm:px-4 py-2 pr-4 sm:pr-10">5-6 Reps</td>
              </tr>
              <tr className="skew-row">
                <td className="px-2 sm:px-4 py-2">Dumbbell Shoulder Press</td>
                <td className="px-2 sm:px-4 py-2">2 Sets</td>
                <td className="px-2 sm:px-4 py-2 pr-4 sm:pr-10">5-6 Reps</td>
              </tr>
              <tr>
                <th className="bg-gray-300 text-black font-bold px-2 sm:px-4 py-2" colSpan="3">Isolation</th>
              </tr>
              <tr className="skew-row">
                <td className="px-2 sm:px-4 py-2">Around-the-worlds</td>
                <td className="px-2 sm:px-4 py-2">2 sets</td>
                <td className="px-2 sm:px-4 py-2 pr-4 sm:pr-10">10-15 Reps</td>
              </tr>
              <tr className="skew-row">
                <td className="px-2 sm:px-4 py-2">L-Hang</td>
                <td className="px-2 sm:px-4 py-2">2 Sets</td>
                <td className="px-2 sm:px-4 py-2 pr-4 sm:pr-10">30-40 secs</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th className="bg-white text-black font-bold px-2 sm:px-4 py-2" colSpan="3">Cardio</th>
              </tr>
              <tr className='skew-row'>
                <td className="px-2 sm:px-4 py-2">Rowing</td>
                <td className="px-2 sm:px-4 py-2" colSpan="2">Duration: 15 mins</td>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <td className="px-2 sm:px-4 py-2" colSpan="3">
                  <p className="text-xs sm:text-sm text-gray-400">Rest 3-4 minutes between sets. Focus on form and control. Aim for progressive overload.</p>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <br />
        <h4 className='text-sm sm:text-lg text-left mb-4'>Week 5: ᚨ &rarr; ᛒ &rarr; ᚨ</h4>
        <h4 className='text-sm sm:text-lg text-left mb-4'>Week 6: ᛒ &rarr; ᚨ &rarr; ᛒ</h4>
      </div>
    )
  }
];

const Ragnarok = ({ onBack }) => {
  const [current, setCurrent] = useState(0);
  const [showInfo, setShowInfo] = useState([false, false, false]);

  const handleToggleInfo = idx => {
    setShowInfo(info => info.map((v, i) => i === idx ? !v : v));
  };

  const prev = () => {
    setCurrent(c => (c === 0 ? phases.length - 1 : c - 1));
  };
  
  const next = () => {
    setCurrent(c => (c === phases.length - 1 ? 0 : c + 1));
  };

  // Cross-fade animation variants
  const fadeVariants = {
    enter: {
      opacity: 0,
    },
    center: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    }
  };
  const backBtnVariants = {
    initial: { width: 48, scale: 1.1 },
    hover:   { width: 140, scale: 1.25, transition: { type: "spring", stiffness: 300, damping: 28 } }
  };

  const textVariants = {
    initial: { x: -8, opacity: 0 },
    hover:   { x: 0, opacity: 1, transition: { duration: 0.22, ease: "easeOut" } }
  };
  return (
    <section className="scroll-mt-24 bg-black text-white py-8 sm:py-16 px-4 sm:px-6 min-h-screen">

      <motion.button
        onClick={onBack}
        variants={backBtnVariants}
        initial="initial"
        whileHover="hover"
        className="ml-8 mb-8 flex items-center gap-2 bg-white text-gray-800 rounded-full overflow-hidden shadow-md px-0"
        style={{ minWidth: 48 }}
        aria-label="Return to programs"
      >
        {/* icon container keeps icon centered when collapsed */}
        <div className="flex items-center justify-center w-12 h-12 flex-shrink-0">
          <span className="material-icons text-lg">chevron_left</span>
        </div>

        {/* sliding text (hidden when collapsed) */}
        <motion.span
          variants={textVariants}
          className="whitespace-nowrap font-semibold text-sm sm:text-base pr-4"
          style={{ pointerEvents: "none" }}
        >
          Return
        </motion.span>
      </motion.button>


      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-center mb-4">
          Ragnarok
        </h2>
        <br className="hidden sm:block"/>
        <p className="text-lg md:text-xl text-gray-400 text-center mb-8 md:mb-16">The ultimate 6-Week challenge designed to maximise your functional physical potential.</p>
        <div className="w-full bg-[#18181b] rounded-xl shadow-lg p-4 sm:p-8 text-center relative min-h-[350px]">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                variants={fadeVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="w-full"
              >
                <div className="flex justify-between items-center mb-4 gap-2">
                  <button
                    className="bg-gray-700 text-white px-2 py-2 rounded-full hover:bg-gray-400 transition-colors flex items-center justify-center flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12"
                    onClick={prev}
                  >
                    <span className="material-icons text-lg sm:text-xl">chevron_left</span> 
                  </button>
                  <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-center px-2">{phases[current].title}</h2>
                  <button
                    className="bg-gray-700 text-white px-2 py-2 rounded-full hover:bg-gray-400 transition-colors flex items-center justify-center flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12"
                    onClick={next}
                  >
                    <span className="material-icons text-lg sm:text-xl">chevron_right</span>
                  </button>
                </div>
                <p className="text-sm sm:text-lg text-gray-300 mb-6 italic px-2 leading-relaxed">{phases[current].description}</p>
                <button
                  className="mb-6 bg-white text-black font-semibold px-4 sm:px-6 py-2 rounded-full transition duration-300 hover:bg-gray-200 hover:scale-105 hover:shadow-[0_0_16px_4px_rgba(255,0,0,0.5)] text-sm sm:text-base"
                  onClick={() => handleToggleInfo(current)}
                >
                  {showInfo[current] ? "Conceal" : "Reveal"}
                </button>
                <AnimatePresence mode="wait">
                  {showInfo[current] && (
                    <motion.div
                      key={current + "-table"}
                      initial={{ height: 0, opacity: 0, y: -20 }}
                      animate={{ height: "auto", opacity: 1, y: 0 }}
                      exit={{ height: 0, opacity: 0, y: -20 }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      {phases[current].table}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ragnarok;