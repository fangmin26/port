        //css animation fix 나타내기

        window.addEventListener("scroll", function () {
          let section6 = document.querySelector("#section6");
          let menus3 = document.querySelector(".menus.third");
          let sec6Rect = document.querySelector(".sec6 .css_rect")

          // console.log(this.scrollY);
          if (section6.offsetTop - 100 < this.scrollY && menus3.offsetTop - 800 > scrollY) {
            sec6Rect.style.display = "block";
          } else {
            sec6Rect.style.display = "none";
          }
        });

        //javascript code_btn active
        const codeBTN = document.querySelectorAll(".code_btn > span");
        const CODE = document.querySelectorAll(".coding .CODE")

        codeBTN.forEach((elem, index) => {
          let CODEINDEX = index;
          elem.addEventListener("click", () => {

            
            // for (i = 0; i < 6; i++) {
            //   CODE[i].style.display = "none";
            // }
            // CODE[index].style.display = "block";
          });
        });
