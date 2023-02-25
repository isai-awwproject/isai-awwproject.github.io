var textRemove = document.getElementById("typewriterhello");

window.setInterval(function() {
  var elem = document.getElementById('typewriterpara');
  elem.scrollTop = elem.scrollHeight;
}, 500);

const typewriterhello = new Typewriter('#typewriterhello', {
  loop: false,
  delay:100,
  deleteSpeed:20
});

typewriterhello.pauseFor(2000)
  .typeString('Hey Isai,<br>')
  .pauseFor(900)
  .typeString('<br>So basically I wrote a poem for you one night when I was high and couldnt stop thinking of you.<br>')
  .pauseFor(900)
  .typeString('<br>So this actually first attempt to fully complete a poem, usually I stop after a few good lines and I&#39;ll run out of things to say<br>')
  .pauseFor(900)
  .typeString('But I dont run out of words when I think about you, so yeah.... Thanks to you for making me complete a poem and I&#39;ve even published it in a couple poetry webistes. I&#39;ll attach the link to those below after you read the poem<br>')
  .pauseFor(900)
  .typeString('<br> Anyway here you go, Have a read and let me know how it is <br>')
  .pauseFor(1500)
  .changeCursor(' ')
  .deleteAll('speed')
  .callFunction(() => {
    textRemove.remove();

    const typewriterheading = new Typewriter('#typewriterheading', {
      loop: false,
      delay:200
    });
    
    typewriterheading.pauseFor(2000)
      .typeString('To My Dear Isai,')
      .pauseFor(1000)
      .changeCursor(' ')
      .callFunction(() => {
        const typewriterpara = new Typewriter('#typewriterpara', {
          loop: false,
          delay:65
        });
        
        // await sleep(2000);
        // typewriterheading.stop();
        
        typewriterpara.pauseFor(1000)
          .typeString('Like daisies in the field,<br> You stand out among the rest,<br> ')
          .pauseFor(1000)
          .typeString('Your beauty and grace revealed,<br> By the sun&#39;s warm caress.')
          .pauseFor(1500)
          .typeString('<br><br>Each petal, pure as light,<br>Is soft to the touch,<br>Your presence, it means so much.<br>')
          .pauseFor(1000)
          .typeString('Your eyes, oh what a sight,<br>is deep, mysterious, and kind.')
          .pauseFor(1500)
          .typeString('<br><br>Your smile, a beacon in the night,<br>Bright and warm, it lifts my soul,<br>It makes my heart sing and run,<br>')
          .pauseFor(1000)
          .typeString('Your laughter, music to my sight,<br>And sets my spirit free to stroll.')
          .pauseFor(1500)
          .typeString('<br><br>With you, everything feels right,<br>My heart, you have won.')
          .pauseFor(1500)
          .typeString('<br><br>Like daisies, you are delicate,<br>Yet strong in every way,<br>')
          .pauseFor(1000)
          .typeString('Your soul, it is so intricate,<br>It takes my breath away.')
          .pauseFor(1500)
          .typeString('<br><br>I am a lucky man, I know,<br>To have this daisy in my life to grow,<br>And like the flower that blooms so fine,<br>You are the daisy of my dreams,<br>')
          .pauseFor(1000)
          .typeString('The one that shines, one that gleams,<br>I&#39;ll cherish you forever, as mine.')
          .pauseFor(1500)
          .typeString('<br><br>With you, my heart is full,<br>As if surrounded by daisies,<br>You are the most beautiful,<br>In all the world, my lady.')
          .pauseFor(1500)
          .typeString('<br><br>So let us dance among the flowers,<br>And feel their sweet embrace,<br>For like daisies, our love will tower,<br>Above all else, in this enchanted vast world.<br><br>')
          .pauseFor(1500)
          .typeString('<br>')
          .pauseFor(1500)
          .typeString('By')
          .pauseFor(1000)
          .typeString('<br>Yashwant')
          .pauseFor(1500)
          .typeString('<br><br>Published Links: <br><br>')
          .pauseFor(1000)
          .typeString('<a href="https://allpoetry.com/poem/17016794-To-My-Dear-Isai--by-iyashwant" target="_blank">allpoetry.com/poem/17016794-To-My-Dear-Isai--by-iyashwant</a>')
          .pauseFor(1000)
          .typeString('<br><br> <a href="https://www.writerscafe.org/writing/iyashwant/2842263/" target="_blank">writerscafe.org/writing/iyashwant/poem-to-my-dear-isai</a>')
          .pauseFor(1000)
          .typeString('<br><br> <a href="https://mypoeticside.com/show-poem-160572" target="_blank">mypoeticside.com/show-poem-to-my-dear-isai</a>')
          .pauseFor(1000)
          .typeString('<br><br> <a href="https://www.poetry.com/poem/152049/to-my-dear-isai%2C" target="_blank">poetry.com/poem/152049/to-my-dear-isai</a>')
          .pauseFor(18500)
          .start();
        
      })
    //   .deleteChars(7)
    //   .typeString(' <br> <strong>altered!<strong>')
      .pauseFor(200)
      .start();

    
  })

//   .deleteChars(7)
//   .typeString(' <br> <strong>altered!<strong>')
  .start();



// const typewriterheading = new Typewriter('#typewriterheading', {
//   loop: false,
//   delay:200
// });

// typewriterheading.changeCursor(' ').pauseFor(2000)
//   .typeString('To My Dear Isai,')
//   .pauseFor(1000)
//   .changeCursor(' ')
//   .pauseFor(10000)
//   .callFunction(() => {
//     const typewriterpara = new Typewriter('#typewriterpara', {
//       loop: false,
//       delay:65
//     });
    
//     // await sleep(2000);
//     // typewriterheading.stop();
    
//     typewriterpara.changeCursor(' ')
//       .pauseFor(6000)
//       .changeCursor('|')
//       .pauseFor(2800)
//       .typeString('Like daisies in the field,<br> You stand out among the rest,<br> Your beauty and grace revealed,<br> By the sun&#39;s warm caress.')
//       .pauseFor(1500)
//       .typeString('<br><br>Each petal, pure as light,<br>Is soft to the touch,<br>Your presence, it means so much.<br>Your eyes, oh what a sight,<br>is deep, mysterious, and kind.')
//       .pauseFor(1500)
//       .typeString('<br><br>Your smile, a beacon in the night,<br>Bright and warm, it lifts my soul,<br>It makes my heart sing and run,<br>Your laughter, music to my sight,<br>And sets my spirit free to stroll.')
//       .pauseFor(1500)
//       .typeString('<br><br>With you, everything feels right,<br>My heart, you have won.')
//       .pauseFor(1500)
//       .typeString('<br><br>Like daisies, you are delicate,<br>Yet strong in every way,<br>Your soul, it is so intricate,<br>It takes my breath away.')
//       .pauseFor(1500)
//       .typeString('<br><br>I am a lucky man, I know,<br>To have this daisy in my life to grow,<br>And like the flower that blooms so fine,<br>You are the daisy of my dreams,<br>The one that shines, the one that gleams,<br>I&#39;ll cherish you forever, as mine.')
//       .pauseFor(1500)
//       .typeString('<br><br>With you, my heart is full,<br>As if surrounded by daisies,<br>You are the most beautiful,<br>In all the world, my lady.')
//       .pauseFor(1500)
//       .typeString('<br><br>So let us dance among the flowers,<br>And feel their sweet embrace,<br>For like daisies, our love will tower,<br>Above all else, in this enchanted vast world<br><br>')
//       .pauseFor(1500)
//       .typeString('')
//       .pauseFor(9500)
//       .start();
    
//   })
// //   .deleteChars(7)
// //   .typeString(' <br> <strong>altered!<strong>')
//   .pauseFor(200)
//   .start();


//   .deleteChars(7)
//   .typeString(' <br> <strong>altered!<strong>')
  // .pauseFor(2500)
  // .start();
