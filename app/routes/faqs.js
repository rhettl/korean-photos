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
                  + '<a href="https://github.com/rhettl/korean-photos/issues/new">here</a></p>'
      },
      // {
      //   id: 'identify-someone',
      //   question: 'How can I identify someone in a photograph??',
      //   response: '<p>I don\'t know most of the people in the photos. only some are named and only a few others have we '
      //             + 'been able to identify beyond reasonable doubt. I would love to identify all the people in these photos.</p>'
      //             + '<p>Please email me <a href="mailto:rhett@rhettl.com">rhett@rhettl.com</a> or post a new issue '
      //             + '<a href="https://github.com/rhettl/korean-photos/issues/new">here</a></p>'
      // },
    ]
  }
});
