function changeAvatar() {
    let ava_num = prompt("Please choose the number you want to change your Avatar to!", "");
    if (isNaN(parseInt(ava_num))) {
          ava_num = localStorage.getItem("avatar");
    } else {
        let num = parseInt(ava_num);
        if (num > 34) {
            ava_num = localStorage.getItem("avatar");
        }
        else {
        ava_num = String(num);
        }
    }
    localStorage.setItem("avatar", ava_num);
};
changeAvatar();
location.reload(false);
