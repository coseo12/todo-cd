<template>
	<div class="inputBox shadow">
		<input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
		<!-- <button v-on:click="addTodo">add</button> -->
		<span class="addContainer" v-on:click="addTodo">
			<font-awesome-icon icon="plus" class="addBtn" />
			<!-- <font-awesome-icon :icon="['fab', 'google-plus']" /> -->
			<!-- <i class="fas fa-plus"></i> -->
		</span>
		<!-- use the modal component, pass in the prop -->
		<modal v-if="showModal" @close="showModal = false">
			<!--
		you can use custom content here to overwrite
		default content
		-->
			<h3 slot="header">경고!!</h3>
			<h3 slot="body">바디</h3>
		</modal>
	</div>
</template>

<script>
import Modal from './common/Modal.vue';
import { mapMutations } from 'vuex';

export default {
	data() {
		return {
			newTodoItem: '',
			showModal: false,
		};
	},
	methods: {
		...mapMutations(['addOneItems']),
		addTodo() {
			if (this.newTodoItem !== '') {
				this.addOneItems(this.newTodoItem);
				this.clearInput();
			} else {
				this.showModal = !this.showModal;
			}
		},
		clearInput() {
			this.newTodoItem = '';
		},
	},
	components: {
		Modal,
	},
};
</script>

<style scoped>
input:focus {
	outline: none;
}
.inputBox {
	background: white;
	height: 50px;
	line-height: 50px;
	border-radius: 5px;
}
.inputBox input {
	border-style: none;
	font-size: 0.9rem;
}
.addContainer {
	float: right;
	background: linear-gradient(to right, #6478fb, #8763fb);
	display: block;
	width: 3rem;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
}
.addBtn {
	color: white;
	vertical-align: middle;
}
</style>