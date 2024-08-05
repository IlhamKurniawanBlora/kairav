<template>
  <input type="checkbox" id="active">
      <label for="active" class="menu-btn"><i class="fas fa-bars"></i></label>
      <div class="wrapper">
          <ul class="text-4xl text-white space-y-4">
            <li v-for="(menuItem, index) in menuItems" :key="index">
              <StyleButton>
                <a :href="menuItem.route" @click="toggleMenu" class="inline-block w-[100px]">{{ menuItem.name }}</a>
              </StyleButton>
            </li>
          </ul>
      </div>
  </template>

  <script>
   export default {
    data() {
      return {
        menuItems: [
          { name: 'Home', route: '/' },
          { name: 'Project', route: '/project' },
          { name: 'Gallery', route: '/gallery' },
          { name: 'Blog', route: '/blog' },
          { name: 'About', route: '/about' },
          // Tambahkan item menu lain jika diperlukan
        ],
      };
    }
  };
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');

  .wrapper{
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(-135deg, #ffa011, #fff12e);
  /* background: linear-gradient(375deg, #1cc7d0, #2ede98); */
  /* clip-path: circle(25px at calc(0% + 45px) 45px); */
  clip-path: circle(25px at calc(100% - 45px) 45px);
  transition: all 0.3s ease-in-out;
}
#active:checked ~ .wrapper{
  clip-path: circle(75%);
}
.menu-btn{
  position: absolute;
  z-index: 2;
  right: 20px;
  /* left: 20px; */
  top: 20px;
  height: 50px;
  width: 50px;
  text-align: center;
  line-height: 50px;
  border-radius: 50%;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  background: linear-gradient(-135deg, #e28408, #e9ff1f);
  /* background: linear-gradient(375deg, #1cc7d0, #2ede98); */
  transition: all 0.3s ease-in-out;
}
#active:checked ~ .menu-btn{
  background: #f3ef14;
  color: #01030c;
}
#active:checked ~ .menu-btn i:before{
  content: "\f00d";
}
.wrapper ul{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  list-style: none;
  text-align: center;
}
.wrapper ul li a:hover:after{
  transform: scaleY(1);
}
input[type="checkbox"]{
  display: none;
}
  </style>
  