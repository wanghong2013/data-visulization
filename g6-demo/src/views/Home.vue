<template>
  <div class="home">
    <div id="flow-node-list"></div>

  </div>
</template>

<script>
  import G6 from '@antv/g6';
  import {nodes,edges} from './config/nodes'
export default {
  name: 'Home',
  data(){
    return{
        data:{
          nodes,
          edges,
          prevNode:null
        }
    }
  },
  mounted() {

      this.__initCharts()
  },
  methods:{
    __initCharts() {
      const This = this;
      const graph = new G6.Graph({
        container: "flow-node-list",
        width: 800,
        height: 800,
        renderer: "svg",

        modes: {
          default: ["drag-canvas", "zoom-canvas"]
        },
        defaultEdge: {
          style: {
            stroke: "#5B8FF9",
            lineWidth: 1,
            lineAppendWidth: 5,
            endArrow: true
          }
        },

      });

      graph.data(this.data);
      graph.render();

      graph.on("node:click", ev => {

        if(this.prevNode){
          graph.setItemState(this.prevNode, 'active', false);
        }
        console.log(ev,'nodes')
        const {
          _cfg: {
            model: { isActive, nodeLevel, flowNodeType }
          }
        } = ev.item;
        graph.setItemState(ev.item, 'active', true);
        this.prevNode = ev.item;
        // if (isActive) {
        //   this.dispatch("rushFlowConfigDetail", "nodeClick", {
        //     nodeLevel,
        //     flowNodeType
        //   });
        // }
      });
      graph.on("edge:click", ev => {
        const {
          _cfg: {
            model: { isActive, nodeLevel, flowNodeType }
          }
        } = ev.item;
        if(this.prevNode){
          graph.setItemState(this.prevNode, 'active', false);
        }
        graph.setItemState(ev.item, 'active', true);
        this.prevNode = ev.item;
        // if (isActive) {
        //   this.dispatch("rushFlowConfigDetail", "nodeClick", {
        //     nodeLevel,
        //     flowNodeType
        //   });
        // }
      });
    }
  }
}
</script>
<style scoped>
  .home{
    width: 100%;
    height: 100%;
  }
  #mountNode{
    width: 100%;
    height: 100%;
  }
</style>
