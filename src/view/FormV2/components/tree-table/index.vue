<template>
  <div>
    <Card shadow>
      {{ $t('treeTable.name') }} tree-table-vue，{{ $t('treeTable.based_on') }} <a href="https://github.com/MisterTaki/vue-table-with-tree-grid">vue-table-with-tree-grid</a> {{ $t('treeTable.develop') }}，{{ $t('treeTable.fixed_some') }}，{{ $t('treeTable.add_features') }}
      <p><b>{{ $t('treeTable.supported_slot') }} slot-scope {{ $t('treeTable.perfom_custom_column') }}</b></p>
      <p>{{ $t('treeTable.see_documentation') }} <a href="https://github.com/lison16/tree-table-vue">https://github.com/lison16/tree-table-vue</a></p>
      <tree-table expand-key="sex" :expand-type="false" :selectable="false" :columns="columns" :data="data" >
        <template slot="likes" slot-scope="scope">
          <Button @click="handle(scope)">123</Button>
        </template>
      </tree-table>
      <textarea v-model="content"></textarea>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'tree_table_page',
  data () {
    return {
      columns: [
        {
          title: this.$t('treeTable.columns.name'),
          key: 'name',
          width: '400px'
        },
        {
          title: this.$t('treeTable.columns.gender'),
          key: 'sex',
          minWidth: '50px'
        },
        {
          title: this.$t('treeTable.columns.score'),
          key: 'score'
        },
        {
          title: this.$t('treeTable.columns.likes'),
          key: 'likes',
          minWidth: '200px',
          type: 'template',
          template: 'likes'
        }
      ],
      data: [
        {
          name: 'Jack',
          sex: 'male',
          likes: ['football', 'basketball'],
          score: 10,
          children: [
            {
              name: 'Ashley',
              sex: 'female',
              likes: ['football', 'basketball'],
              score: 20,
              children: [
                {
                  name: 'Ashley',
                  sex: 'female',
                  likes: ['football', 'basketball'],
                  score: 20
                },
                {
                  name: 'Taki',
                  sex: 'male',
                  likes: ['football', 'basketball'],
                  score: 10,
                  children: [
                    {
                      name: 'Ashley',
                      sex: 'female',
                      likes: ['football', 'basketball'],
                      score: 20
                    },
                    {
                      name: 'Taki',
                      sex: 'male',
                      likes: ['football', 'basketball'],
                      score: 10,
                      children: [
                        {
                          name: 'Ashley',
                          sex: 'female',
                          likes: ['football', 'basketball'],
                          score: 20
                        },
                        {
                          name: 'Taki',
                          sex: 'male',
                          likes: ['football', 'basketball'],
                          score: 10
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              name: 'Taki',
              sex: 'male',
              likes: ['football', 'basketball'],
              score: 10
            }
          ]
        },
        {
          name: 'Tom',
          sex: 'male',
          likes: ['football', 'basketball'],
          score: 20,
          children: [
            {
              name: 'Ashley',
              sex: 'female',
              likes: ['football', 'basketball'],
              score: 20,
              children: [
                {
                  name: 'Ashley',
                  sex: 'female',
                  likes: ['football', 'basketball'],
                  score: 20
                },
                {
                  name: 'Taki',
                  sex: 'male',
                  likes: ['football', 'basketball'],
                  score: 10
                }
              ]
            },
            {
              name: 'Taki',
              sex: 'male',
              likes: ['football', 'basketball'],
              score: 10,
              children: [
                {
                  name: 'Ashley',
                  sex: 'female',
                  likes: ['football', 'basketball'],
                  score: 20
                },
                {
                  name: 'Taki',
                  sex: 'male',
                  likes: ['football', 'basketball'],
                  score: 10
                }
              ]
            }
          ]
        },
        {
          name: 'Tom',
          sex: 'male',
          likes: ['football', 'basketball'],
          score: 20
        },
        {
          name: 'Tom',
          sex: 'male',
          likes: ['football', 'basketball'],
          score: 20,
          children: [
            {
              name: 'Ashley',
              sex: 'female',
              likes: ['football', 'basketball'],
              score: 20
            },
            {
              name: 'Taki',
              sex: 'male',
              likes: ['football', 'basketball'],
              score: 10
            }
          ]
        }
      ],
      content: []
    }
  },
  methods: {
    handle (scope) {
      this.content = JSON.stringify(scope)
    }
  }
}
</script>

<style>
  textarea {
    width: 100%;
    margin-top: 1rem;
    height: 150px;
  }
</style>
