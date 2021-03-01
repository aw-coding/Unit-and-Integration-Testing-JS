import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('enterNum changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  })
})

//AW material from here
describe('App.vue', () =>{
  it('should be able to add 4 to 1 and get 5', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add(1);
    expect(wrapper.vm.runningTotal).to.equal(5)

  })


})


describe('App.vue', () =>{
  it('should be able to subtract 4 from 7 and get 3', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 7
    wrapper.vm.subtract(4);
    expect(wrapper.vm.runningTotal).to.equal(3)
  })
})

describe('App.vue', () =>{
  it('should be able to multiply', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 3
    wrapper.vm.multiply(5);
    expect(wrapper.vm.runningTotal).to.equal(15)
  })
})


describe('App.vue', () =>{
  it('should be able to click numbers', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 0
    wrapper.vm.numberClick(6);
    expect(wrapper.vm.runningTotal).to.equal(6)
  })
})

describe('App.vue', () =>{
  it('should be able to chain multiple operations', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 0
    wrapper.vm.add(2);
    wrapper.vm.operatorClick()
    wrapper.vm.add(2)
    expect(wrapper.vm.runningTotal).to.equal(4)
  })
})

describe('App.vue', () =>{
  it('should be able to clear the running total without affecting the calculation', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.runningTotal = 20
    wrapper.vm.clearClick()
    wrapper.vm.add(6);
    expect(wrapper.vm.runningTotal).to.equal(6)
  })
})