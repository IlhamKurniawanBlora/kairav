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
  },
  methods: {
    toggleMenu() {
      // Toggle menu functionality
      const checkbox = document.getElementById('active');
      checkbox.checked = false;
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');

/* StyleButton transitions */
.style-button {
  position: relative;
  padding: 12px 24px;
  border: 2px solid transparent;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.style-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.style-button:hover {
  transform: translateY(-3px);
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.style-button:hover::before {
  left: 100%;
}

.style-button:active {
  transform: translateY(-1px);
  transition: transform 0.1s ease;
}

.style-button a {
  position: relative;
  z-index: 1;
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  transition: all 0.3s ease;
}

.style-button:hover a {
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  letter-spacing: 1px;
}

/* Menu animations with staggered effect */
.wrapper ul li {
  opacity: 0;
  transform: translateX(50px);
  transition: all 0.3s ease;
}

#active:checked ~ .wrapper ul li {
  opacity: 1;
  transform: translateX(0);
}

#active:checked ~ .wrapper ul li:nth-child(1) { transition-delay: 0.1s; }
#active:checked ~ .wrapper ul li:nth-child(2) { transition-delay: 0.2s; }
#active:checked ~ .wrapper ul li:nth-child(3) { transition-delay: 0.3s; }
#active:checked ~ .wrapper ul li:nth-child(4) { transition-delay: 0.4s; }
#active:checked ~ .wrapper ul li:nth-child(5) { transition-delay: 0.5s; }

.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(-135deg, #ffa011, #fff12e);
  clip-path: circle(25px at calc(100% - 45px) 45px);
  transition: all 0.3s ease-in-out;
}

#active:checked ~ .wrapper {
  clip-path: circle(75%);
}

.menu-btn {
  position: absolute;
  z-index: 2;
  right: 20px;
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
  transition: all 0.3s ease-in-out;
}

.menu-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

#active:checked ~ .menu-btn {
  background: #f3ef14;
  color: #01030c;
  transform: rotate(180deg);
}

#active:checked ~ .menu-btn i:before {
  content: "\f00d";
}

.wrapper ul {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  list-style: none;
  text-align: center;
}

input[type="checkbox"] {
  display: none;
}

/* Additional pulse effect for menu button */
.menu-btn::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0);
  transition: transform 0.3s ease;
}

.menu-btn:active::after {
  transform: scale(1.2);
  transition: transform 0.1s ease;
}
</style>