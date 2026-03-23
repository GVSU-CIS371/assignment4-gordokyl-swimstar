import { defineStore } from "pinia";
import tempretures from "../data/tempretures.json";
import bases from "../data/bases.json";
import creamers from "../data/creamers.json";
import syrups from "../data/syrups.json";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures,
    bases: bases,
    creamers: creamers,
    syrups: syrups,

    currentTemp: tempretures[0],
    currentBase: bases[0],
    currentCreamer: creamers[0],
    currentSyrup: syrups[0],

    beverage: [] as any [],
    name:"",
  }),

  actions: {
    makeBeverage(name: string) {
      const newBeverage = {
        name,
        temp: this.currentTemp,
        base: this.currentBase,
        creamer: this.currentCreamer,
        syrup: this.currentSyrup,
      };

      this.beverage.push(newBeverage);
    },

    showBeverage(bev: any) {
      const store = this as any;

      store.currentTemp = bev.temp;
      store.currentBase = bev.base;
      store.currentCreamer = bev.creamer;
      store.currentSyrup = bev.syrup;
      
    }
  },

  persist: true,

});
export { bases, syrups, creamers };

