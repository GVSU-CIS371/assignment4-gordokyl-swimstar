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
    makeBeverage() {
      const store = this as any;

      const newBeverage = {
        name,
        temp: store.currentTemp,
        base: store.currentBase,
        creamer: store.currentCreamer,
        syrup: store.currentSyrup,
      };

      store.$patch((state: any) => {
        state.beverages.push(newBeverage);
      });
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

