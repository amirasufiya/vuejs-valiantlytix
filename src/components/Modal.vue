<template>
    <div class="backdrop" @click="closeModal">
        <div class="modal">
            <img :src="image"/>
            <!-- <img src="@/assets/crown.jpg" alt="title" /> -->
            <h1>Hi, Royal Shopper!</h1>
            <p>Shopping like a King and <br> get rewarded for each transaction!</p>
        </div>
    </div>
</template>

<script>

import image from "@/assets/crown.png"

export default {
    data(){
        return {
            image: image
        }
    },
    methods: {
        closeModal() {
            this.$emit('close')
        }
    }
}
</script>


<style scope>
    .modal {
    width: 400px;
    padding: 10px;
    margin: 100px auto;
    background: white;
    border-radius: 5px;
  }
  .backdrop {
    top: 0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
  }
  .modal h1 {
    color: #03cfb4;
    border: none;
    padding: 0;
  }
  .modal p {
    font-style: normal;
  }
  .modal .actions {
    text-align: center;
    margin: 30px 0 10px 0;
    color: #333;
  }
  .modal .actions a {
    color: #333;
    padding: 8px;
    border: 1px solid #eee;
    border-radius: 4px;
    text-decoration: none;
    margin: 10px;
  }
</style>