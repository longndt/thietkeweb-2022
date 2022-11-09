function validateForm(form) {
   {
      //validate input name empty
      if (form.fullname.value == "") {
         //alert("Name can not be empty")
         document.getElementsByTagName("span")[0].innerHTML = "Name can not be empty"
         document.getElementsByTagName("span")[0].style.color = "red"
         form.fullname.focus();
      } else {
         document.getElementsByTagName("span")[0].innerHTML = ""
      }
      if (form.age.value.length == 0) {
         document.getElementsByTagName("span")[1].innerHTML = "Age can not be empty"
         document.getElementsByTagName("span")[1].style.color = "red"
      } else if (form.age.value < 1 || form.age.value > 150) {
         document.getElementsByTagName("span")[1].innerHTML = "Age must be from 1 to 150"
         document.getElementsByTagName("span")[1].style.color = "red"
      } else if (!isNaN(form.age.value)) {
         document.getElementsByTagName("span")[1].innerHTML = "Age must be number"
         document.getElementsByTagName("span")[1].style.color = "red"
      }
      else {
         document.getElementsByTagName("span")[1].innerHTML = ""
      }
   }
}