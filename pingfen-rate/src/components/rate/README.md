# 评分组件

```
使用：
import rateMy from '@/components/ratemy/ratemy'

components: {
  rateMy
},

<rateMy :score="score" :disabled="true"></rateMy> // 不允许评分
<rateMy :score="score" @choice="choice"></rateMy> // 默认


data () {
  return {
    score: 2
  }
},


methods: {
  choice (index) {
    this.score = index
  }
}
```
