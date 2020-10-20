
// ============ Handel % Bar Skills ============ \\
// ----------------------------------------------- \\


// html css js php wp ps
const arrSkills = [100, 90, 75, 80, 90, 55];

// console.log(arrSkills[2]);
const skillsLevel = document.querySelectorAll('.skill-level');
const skillsBar = document.querySelectorAll('.skill-item__bar--black');

const skillsArea = document.querySelector('.skills-area');

for( let i = 0; i < arrSkills.length; i++) {

    skillsLevel[i].textContent = arrSkills[i] + '%';
}
let skillCheck = 0;
let skillHtmlRun, skillCssRun, skillJsRun, skillPhpRun, skillWpRun ,skillPsRun;

window.addEventListener('scroll', () => {
    if(window.scrollY > 850) {
        skillCheck++;
    }
    if(skillCheck === 1) {
        let j1 = 0, j2 =0, j3 =0, j4 =0, j5 =0, j6 =0;
        skillHtmlRun = setInterval(()=> {
            j1++;
            skillsBar[0].style.width = j1 +'%';
            if( j1 === arrSkills[0]) {
                clearInterval(skillHtmlRun);
            } 
        }, 10);

        skillCssRun = setInterval(()=> {
            j2++;
            skillsBar[1].style.width = j2 +'%';
            if( j2 === arrSkills[1]) {
                clearInterval(skillCssRun);
            } 
        }, 10);
        skillJsRun = setInterval(()=> {
            j3++;
            skillsBar[2].style.width = j3 +'%';
            if( j3 === arrSkills[2]) {
                clearInterval(skillJsRun);
            } 
        }, 10);
        skillPhpRun = setInterval(()=> {
            j4++;
            skillsBar[3].style.width = j4 +'%';
            if( j4 === arrSkills[3]) {
                clearInterval(skillPhpRun);
            } 
        }, 10);
        skillWpRun = setInterval(()=> {
            j5++;
            skillsBar[4].style.width = j5 +'%';
            if( j5 === arrSkills[4]) {
                clearInterval(skillWpRun);
            } 
        }, 10);
        skillPsRun = setInterval(()=> {
            j6++;
            skillsBar[5].style.width = j6 +'%';
            if( j6 === arrSkills[5]) {
                clearInterval(skillPsRun);
            } 
        }, 10);

        
         // for(let i = 0; i < arrSkills.length; i++) {
        //         j = 0;
        //         skillRun = setInterval(()=> {
        //         j++;
        //         skillsBar[i].style.width = j +'%';
        //         if( j === arrSkills[i]) {
        //             clearInterval(skillRun);
        //             // console.log('fd');
        //         } 
        //     }, 10);

        // }
        
    }
});

