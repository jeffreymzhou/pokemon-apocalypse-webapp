<template>
  <div>
    <el-row style="padding-left: 100px; padding-right: 100px; margin-top: 30px;">
      <div
        :class="addItem ? 'card' : 'button'"
        class="add-item"
        style="margin-bottom: 20px;"
      >
        <div v-if="!addItem" @click="addItem=true">
          <i class='el-icon-plus'></i> New Item
        </div>
        <div v-else>
          <h3>
          New Item
          </h3>
          <el-row type="flex" justify="space-around">
            <el-col :span="1">
              <el-image
              style="width:35px; height: 35px; margin-top: 15px; float: left;"
              fit="contain"
              :src="newItem.MiniImageURL">
            </el-image>
            <el-image
              style="width: 70px; height: 70px; margin-top: 15px;"
              fit="contain"
              :src="newItem.LargeImageURL">
            </el-image>
            </el-col>
            <el-col :span="7">
              <el-row style="margin-bottom: 10px;">
                <el-input placeholder="Name" v-model="newItem.Name" />
              </el-row>
              <el-row style="margin-bottom: 10px;">
                <el-col :span="12" style="padding-right: 5px;">
                  <el-input placeholder="Mini Image URL" v-model="newItem.MiniImageURL"/>
                </el-col>
                <el-col :span="12" style="padding-left: 5px;">
                  <el-input placeholder="Large Image URL" v-model="newItem.LargeImageURL"/>
                </el-col>
              </el-row>
              <el-row style="margin-bottom: 10px;">
                <el-input placeholder="Price" v-model="newItem.price"/>
              </el-row>
            </el-col>
            <el-col :span="13">
              <el-input
                type="textarea"
                :rows="2"
                placeholder="Description"
                style="margin-bottom: 10px;"
              />
              <el-input
                type="textarea"
                :rows="2"
                placeholder="Abilities (semi-colon separated) e.g. ability 1; ability 2;..."
                style="margin-bottom: 10px; max-height: 100px;"
              />
            </el-col>
          </el-row>
          <el-row>
            <el-button @click="addItem=false">
              Cancel
            </el-button>
            <el-button>
              Save
            </el-button>
          </el-row>
        </div>
      </div>
      <div
        v-for="(item, index) in allItems"
        :key="item.name"
        class="item-card"
        @mouseover="showButtonIndex = index"
        @mouseleave="showButtonIndex = null"
        >
        <el-row type="flex" justify="space-between">
          <el-col :span="1" style="min-width: 60px;">
            <el-image
              style="width:35px; height: 35px; margin-top: 8px; margin-left: 8px; float: left;"
              :src="item.imageURL"
              fit="contain">
            </el-image>
          </el-col>
          <el-col :span="2" style="line-height: 50px; text-align: left; min-width: 100px;">
            <strong>{{item.name}}</strong>
          </el-col>
          <el-col :span="2" style="line-height: 55px; text-align: left; min-width: 80px;">
            <span>
            <i class="el-icon-coin"></i>{{item.price}}
            </span>
          </el-col>
          <el-col :span="18" style="padding-top: 15px; text-align: left;">
            
          </el-col>
          <el-col :span="2">
            <el-button 
              v-if="showButtonIndex === index" 
              style="float: right; margin-top: 5px; margin-right: 5px;"
              @click="openModal(item)">
              BUY
            </el-button>
          </el-col>
        </el-row>
      </div>
      <el-dialog
        v-if="modalItemInfo !== null"
        :title="modalItemInfo.name"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="closeModal">
        <el-row type="flex" justify="space-around">
          <el-col :span="6">
            <el-row style="margin-bottom: 40px;">
              <el-image
              style="width: 70px; height: 70px;"
              :src="modalItemInfo.largeImageURL"
              fit="contain">
            </el-image>
            </el-row>
            <el-row>
              <span style="font-size: 30px;">
                <i class="el-icon-coin"></i>{{modalItemInfo.price}}
              </span>
            </el-row>
          </el-col>
          <el-col :span="12">
            <div style="text-align: left; margin-bottom: 20px; word-break: keep-all;">
              {{modalItemInfo.description}}
            </div>
            <el-row
              v-for="ability in modalItemInfo.abilities"
              :key="ability"
              style="text-align: left; margin-left: 10px;">
              ↳ {{ability}}
            </el-row>
          </el-col>
        </el-row>
        <span slot="footer" class="dialog-footer">
          <el-button @click="closeModal">Cancel</el-button>
          <el-button type="primary" @click="closeModal">Confirm</el-button>
        </span>
      </el-dialog>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addItem: false,
      newItem: {
        miniImageURL: '',
        largeImageURL: '',
        name: '',
        price: ''
      },
      showButtonIndex: null,
      dialogVisible: false,
      modalItemInfo: null,
      imageURL: 'https://archives.bulbagarden.net/media/upload/e/e8/Bag_Bluk_Berry_Sprite.png',
      allItems:[
        {
          name: 'Burn Heal',
          description: 'A yummy berry with lots of flavors all in one! It\'s usually very firm, but this one feels a little mushy...',
          imageURL: 'https://cdn.bulbagarden.net/upload/6/6c/Bag_Burn_Heal_Sprite.png',
          largeImageURL: 'https://cdn.bulbagarden.net/upload/f/f4/Dream_Burn_Heal_Sprite.png',
          abilities: ['heals characters', 'gets you happy'],
          price: 100
        },
        {
          name: 'Lum Berry',
          description: 'A green berry that\'s surprisingly hard when ripe. It takes a while to grow, but yields great results when it does.',
          imageURL: 'https://cdn.bulbagarden.net/upload/a/a6/Bag_Lum_Berry_Sprite.png',
          largeImageURL: 'https://cdn.bulbagarden.net/upload/f/f4/Dream_Burn_Heal_Sprite.png',
          abilities: [],
          price: 100
        },
        {
          name: 'Exilir',
          description: 'A medicinal spray into your mouth. The taste isn\'t pleasant, but you feel a revitalized.',
          imageURL: 'https://cdn.bulbagarden.net/upload/f/fe/Bag_Elixir_Sprite.png',
          largeImageURL: 'https://cdn.bulbagarden.net/upload/f/f4/Dream_Burn_Heal_Sprite.png',
          abilities: [],
          price: 100
        },
        {
          name: 'Soothe Bell',
          description: 'A small silver bell with a gentle and pleasing ring. You wonder what it can be used for...',
          imageURL: 'https://cdn.bulbagarden.net/upload/a/ad/Bag_Soothe_Bell_Sprite.png',
          largeImageURL: 'https://cdn.bulbagarden.net/upload/f/f4/Dream_Burn_Heal_Sprite.png',
          abilities: [],
          price: 100
        },
        {
          name: 'Soda Pop',
          description: 'A fizzy drink with a cute marble in it. Fun to just open, but just as refreshing!',
          imageURL: 'https://cdn.bulbagarden.net/upload/0/00/Bag_Soda_Pop_Sprite.png',
          largeImageURL: 'https://cdn.bulbagarden.net/upload/f/f4/Dream_Burn_Heal_Sprite.png',
          abilities: [],
          price: 100
        },
        {
          name: 'Occa Berry',
          description: 'A berry as red as it is spicy! It has hints of choco mixed in as well. Maybe the spice makes burns feel like nothing!',
          imageURL: '',
          largeImageURL: 'https://cdn.bulbagarden.net/upload/f/f4/Dream_Burn_Heal_Sprite.png',
          abilities: [],
          price: 100
        },
        {
          name: 'Oran Berry',
          description: 'A yummy berry with lots of flavors all in one! It\'s usually very firm, but this one feels a little mushy...',
          imageURL: 'https://cdn.bulbagarden.net/upload/8/86/Bag_Oran_Berry_Sprite.png',
          largeImageURL: 'https://cdn.bulbagarden.net/upload/3/39/TagOran.png',
          abilities: ['Gives user [+1]'],
          price: 100
        }
      ]
    }
  },
  methods: {
    showButton(index) {
      console.log("HOVERING")
      this.showButtonIndex = index
    },
    openModal(item) {
      this.modalItemInfo = item
      this.dialogVisible = true
    },
    closeModal() {
      this.dialogVisible = false
      this.modalItemInfo = null
    }
  }
}
</script>

<style lang="scss">
.item-card {
  margin-bottom: 20px;
  padding: 15px;
  height: 50px;
  border: 1px solid #EBEEF5;
  border-radius: 3px;
  box-shadow: 5px 5px 10px rgba(156, 156, 156, 0.2);
  -webkit-transition: .3s;
  transition: .3s;
  &:hover {
    box-shadow: 7px 7px 10px rgba(109, 109, 109, 0.2);
  }
}
.el-dialog__body {
  padding-bottom: 0px !important;
}
.add-item {
  -webkit-transition: .5s;
  transition: .5s;
  &.button {
    border: 1px solid rgb(180, 180, 180);
    border-radius: 5px;
    line-height: 30px;
    color: rgb(53, 53, 53);
    height: 30px;
    width: 200px;
    margin: 0 auto;
    &:hover {
      background-color: rgb(198, 238, 250);
      cursor: pointer;
    }
  }
  &.card {
    padding-bottom: 15px;
    margin: 0 auto;
    width: 100%;
    height: 250px;
    border: 1px solid #EBEEF5;
    border-radius: 3px;
    box-shadow: 5px 5px 10px rgba(156, 156, 156, 0.2);
  }
}
.el-textarea__inner {
  padding-top: 7px !important;
  padding-left: 7px !important;
}

</style>
