<template>
  <h1>Hello, {{ title }}</h1>
  <div>{{ htmlString }}</div>
  <div v-html="htmlString"></div>
  <input type="text" v-model="valueModel"/>
  <input type="text" v-model.number="numberModel"/>
  <div>
    <textarea v-model="message"></textarea>
  </div>
  <div>
    <select v-model="city">
      <option value="02">서울</option>
      <option value="21">부산</option>
      <option value="064">제주</option>
    </select>
  </div>
  <div>
    <label><input type="checkbox" v-model="checked" true-value="yes" false-value="no"/> {{ checked }} </label>
  </div>
  <br><br>
  <div>
    <label><input type="checkbox" value="서울" v-model="checkedList"/> 서울</label>
    <label><input type="checkbox" value="부산" v-model="checkedList"/> 부산</label>
    <label><input type="checkbox" value="제주" v-model="checkedList"/> 제주</label>
    <br>
    <span>체크한 지역: {{ checkedList }}</span>
  </div>
  <div>
    <label><input type="radio" v-bind:value="radioValue1" v-model="picked"/> 서울</label>
    <label><input type="radio" v-bind:value="radioValue2" v-model="picked"/> 부산</label>
    <label><input type="radio" v-bind:value="radioValue3" v-model="picked"/> 제주</label>
    <br>
    <span>선택한 지역: {{ picked }}</span>
  </div>
  <br><br>
  <div>
    <img v-bind:src="imgSrc"/>
  </div>
  <br><br>
  <div>
    <input type="text" v-model="textValue"/>
    <button type="button" v-bind:disabled="textValue==''">Click</button>
  </div>
  <div class="container" v-bind:class="{'active': isActive, 'text-red': hasError}">
    Class Binding
  </div>
  <div v-bind:style="styleObject">인라인 스타일 바인딩</div>
  <br><br>
  <table>
    <thead>
    <tr>
      <th>no</th>
      <th>제품명</th>
      <th>가격</th>
      <th>카테고리</th>
      <th>배송료</th>
    </tr>
    </thead>
    <tbody>
    <tr :key="i" v-for="(product, i) in productList">
      <td>{{ i + 1 }}</td>
      <td>{{ product.product_name }}</td>
      <td>{{ product.price }}</td>
      <td>{{ product.category }}</td>
      <td>{{ product.delivery_price }}</td>
    </tr>
    </tbody>
  </table>
  <br><br>
  <div>
    <h1 v-if="type=='A'">A</h1>
    <h1 v-else-if="type=='B'">B</h1>
    <h1 v-else>C</h1>
  </div>
  <br>
  <div>
    <button type="button" @click="increaseCounter">Add +1</button>
    <button type="button" @click="setCount(0)">Set 0</button>
    <button type="button" @click="one(), two()">Alert</button>
    <p>This Counter: {{ counter }}</p>
  </div>
  <div>
    <select v-model="selectedValue" @change="changeSelect">
      <option value="서울">서울</option>
      <option value="부산">부산</option>
      <option value="제주">제주</option>
    </select>
  </div>
  <input @keyup.enter="submit"/>
  <br>
  <button type="button" @click="changeName">변경</button>
  <h1>Full Name: {{ fullName }}</h1>
  <h1>Full Name: {{ fullName2 }}</h1>
</template>

<script>
export default {
  name: "DataBinding",
  components: {},
  data() {
    return {
      title: 'world',
      htmlString: '<p style="color:Red;">This is a red string.</p>',
      valueModel: 'South Korea',
      numberModel: 3,
      message: "여러 줄을 입력할 수 있는 textarea 입니다.",
      city: "064",
      checked: true,
      checkedList: [],
      picked: '',
      radioValue1: '서울',
      radioValue2: '부산',
      radioValue3: '제주',
      imgSrc: "https://kr.vuejs.org/images/logo.png",
      textValue: "",
      isActive: true,
      hasError: false,
      styleObject: {
        color: 'red',
        fontSize: '13px'
      },
      productList: [
        {"product_name": "기계식키보드", "price": 25000, "category": "노트북/태블릿", "delivery_price": 5000},
        {"product_name": "무선마우스", "price": 35000, "category": "노트북/태블릿", "delivery_price": 5000},
        {"product_name": "아이패드", "price": 45000, "category": "노트북/태블릿", "delivery_price": 5000},
        {"product_name": "태블릿거치대", "price": 55000, "category": "노트북/태블릿", "delivery_price": 5000}
      ],
      type: 'A',
      counter: 0,
      selectedValue: '',
      firstName: 'Yongju',
      lastName: 'Lee',
      fullName2: ''
    }
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    }
  },
  watch: {
    firstName() {
      this.fullName2 = this.firstName + ' ' + this.lastName;
    },
    lastName() {
      this.fullName2 = this.firstName + ' ' + this.lastName;
    }
  },
  setup() {
  },
  create() {
  },
  mounted() {
  },
  unmounted() {
  },
  methods: {
    increaseCounter() {
      this.counter = this.counter + 1;
    },
    setCount(counter) {
      this.counter = counter;
    },
    one() {
      alert('One');
    },
    two() {
      alert('Two');
    },
    changeSelect() {
      alert(this.selectedValue);
    },
    changeName() {
      this.firstName = 'HAHA';
    }
  }
}
</script>

<style scoped>
container {
  width: 100%;
  height: 200px;
}

.active {
  background-color: yellow;
  font-weight: bold;
}

.text-red {
  color: red;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>