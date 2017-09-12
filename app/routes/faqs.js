import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return [
      {
        id: 'why-make-website',
        question: 'Why did you make this website?',
        response: '<p>I never got the opportunity to meet my grandpa. I grew up knowing another man as my grandpa, someone '
                  + 'I love and am proud to call grandpa. But Norman Stromer, my mother\'s father, died before I was born.</p>'
                  + '<p>In the summer of 2017, my family held a reunion in Garner, IA where his photos were brought '
                  + 'out again. Since these photos will be given to a memorial/exhibit at Ft. Dodge, IA, I decided to '
                  + 'digitize them myself before handing them over.</p>'
                  + '<img src="/images/living-room-floor.jpg" alt="All the photos spread on my floor" class="img-responsive">'
                  + '<p>Originally, I was only planning to make digital copies of these photos for my family, but while laying out all '
                  + 'the photos on my living room floor, I wondered if I could do more with them. I contacted a good friend '
                  + 'and Gulf War veteran regarding how I might go about spreading these photos to others. My friend advised '
                  + 'me to give my scanned photos to VFWs and Korean War veterans associations.</p>'
                  + '<p>As I read the backs of the photos, I felt like I was getting to know my grandpa for the first time. '
                  + 'I laughed at the jokes he made and was surprised to see the some of the people he met. I talked to '
                  + 'my mom about the photos and who or what might be in some of the more enigmatic ones. She told me more '
                  + 'about her father, his opinions, and his relatively short career in the service.</p>'
                  + '<p>I made this website to share the photos, and in turn Norman Stromer, with everyone.</p>'
      },
      {
        id: 'identify-someone',
        question: 'How may I identify someone in a photograph?',
        response: '<p>I don\'t know most of the people in the photos. only some are named and only a few others have we '
                  + 'been able to identify beyond reasonable doubt. I would love to identify all the people in these photos.</p>'
                  + '<p>Please email me <a href="mailto:rhett@rhettl.com">rhett@rhettl.com</a> or post a new issue '
                  + '<a href="https://github.com/rhettl/korean-photos/issues/new">here.</a> Please remember to include '
                  + 'the URL or photo ID with a description of which person you are identifying. Any additional information '
                  + 'about the photo, the people, or anything else is always appreciated.</p>'
      },
      {
        id: 'how-make-site',
        question: 'How did you make this site (technologies)?',
        response: '<p>I made this site partially as a way to learn <a href="https://www.emberjs.com/">Ember.js</a>. For '
                  + 'more information on the technologies used, please see the README.md on the sites '
                  + '<a href="https://github.com/rhettl/korean-photos">public repo.</a></p>'
      },
      {
        id: 'wrong-info',
        question: 'You got a lot of information wrong.',
        response: '<p>Well, 1) that\'s not a question and 2) yes I am positive I did. I\'m sorry.</p>'
                  + '<p>I have never been part of the military. There is a lot of information I am missing to adequately '
                  + 'describe these photos.</p>'
                  + '<p>If you see evidence of something I have missed, or know better how things were at this time, or '
                  + 'WERE THERE!!!! I would <strong>love</strong> to hear from you. Please see the question '
                  + '"How may I identify someone in a photograph?"</p>'
      },
    ]
  }
});
