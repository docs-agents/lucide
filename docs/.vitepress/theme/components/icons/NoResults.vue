<script setup lang="ts">
import { ref, onMounted, computed, markRaw, shallowReadonly, watch } from 'vue';
import {
  bird,
  squirrel,
  rabbit,
  ghost,
  castle,
  drama,
  dog,
  cat,
  wandSparkles,
  save,
  snowflake,
  cake,
  fish,
  turtle,
  rat,
  worm,
  testTubeDiagonal,
  sword,
} from '../../../data/iconNodes';
import createLucideIcon from 'lucide-vue-next/src/createLucideIcon';
import { useEventListener } from '@vueuse/core';
import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue';
import { IconNode } from '../../types';

const { searchQuery, isBrandSearch } = defineProps<{
  searchQuery: string;
  isBrandSearch: boolean;
}>();

defineEmits(['clear']);

interface Placeholder {
  title: string;
  message: string;
  icon: IconNode;
  finePrint?: string;
}

const brandPlaceholders: Placeholder[] = shallowReadonly([
  {
    title: '哎呀！这是什么可怕的品牌标志！',
    message: '[name] 及其“好友”经常出没于这个搜索框，但你在 Lucide 永远找不到它们。',
    icon: markRaw(ghost),
  },
  {
    title: '谢谢你，马里奥！',
    message: '但 [name] 在另一个城堡里！',
    icon: markRaw(castle),
  },
  {
    title: '[name] 曾经试镜我们的图标集',
    message: '……但没有通过面试。',
    icon: markRaw(drama),
  },
  {
    title: '如此搜索。很 [name]。',
    message: '这里没有。太哇了。',
    icon: markRaw(dog),
  },
  {
    title: '我能有 [name] 吗？',
    message: '这里没有 [name] 给你。',
    icon: markRaw(cat),
  },
  {
    title: '正在加载 [name]...',
    message: '致命错误：我们的卡带只包含开源像素。',
    icon: markRaw(save),
  },
  {
    title: '[name] 不得通过',
    message: '不要在每一天的第一缕曙光中期待它的到来。',
    icon: markRaw(wandSparkles),
  },
  {
    title: '冬天要来了',
    message: '但 [name] 肯定不会来。',
    icon: markRaw(snowflake),
  },
  {
    title: '蛋糕是一个谎言',
    message: '在 Lucide 为 [name] 提供图标的承诺也是一个谎言。',
    icon: markRaw(cake),
  },
  {
    title: '这不是 bug',
    message: '周围没有 [name] 图标是一项功能。',
    icon: markRaw(worm),
  },
  {
    title: '实验室爆炸了',
    message: '我们尝试将 [name] 与开源图标混合在一起。',
    icon: markRaw(testTubeDiagonal),
  },
  {
    title: '独自冒险很危险',
    message: '用这个图标代替吧——它不是 [name]，但也许能帮到你。',
    icon: markRaw(sword),
  },
]);

const notFoundPlaceholders: Omit<Placeholder, 'title'>[] = shallowReadonly([
  {
    message: '我们以鸟瞰视角寻找这个图标，但还是找不到。',
    icon: markRaw(bird),
  },
  {
    message: '我们检查了每一棵树。只有橡子，没有结果。',
    icon: markRaw(squirrel),
  },
  {
    message: '你陷得太深了——这个图标根本不存在。',
    icon: markRaw(rabbit),
  },
  {
    message: '这个图标似乎从网中溜走了。',
    icon: markRaw(fish),
  },
  {
    message: '这个图标也许将来会存在……但它还没来。',
    icon: markRaw(turtle),
  },
  {
    message: '该死！这个图标似乎漏掉了。',
    icon: markRaw(rat),
  },
]);

function randomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

const placeholderIcon = ref<HTMLElement>();
const placeholder = ref<Placeholder>();

watch(
  () => isBrandSearch,
  () => {
    placeholder.value = isBrandSearch
      ? {
          ...randomItem(brandPlaceholders),
          finePrint:
            'Lucide 不接受品牌标志，我们也不打算在未来添加它们。这是由于法律限制、设计一致性考虑和实际维护原因的综合因素。',
        }
      : {
          title: `没有找到 "[name]" 的结果`,
          finePrint: '这个图标似乎还不存在……试试搜索类似词条，浏览现有请求，或发起一个新的请求。',
          ...randomItem(notFoundPlaceholders),
        };
  },
  { immediate: true },
);
const iconComponent = computed(() => createLucideIcon('placeholder', placeholder.value.icon));
const flip = ref(false);

onMounted(() => {
  useEventListener(document, 'mousemove', (mouseEvent) => {
    const { width, x } = placeholderIcon.value.getBoundingClientRect();

    const centerX = width / 2 + x;

    flip.value = !isBrandSearch && mouseEvent.x < centerX;
  });
});
</script>

<template>
  <div class="no-results">
    <component
      :is="iconComponent"
      class="placeholder-icon"
      ref="placeholderIcon"
      :class="{ flip }"
      :strokeWidth="1"
    />
    <h2 class="no-results-text">{{ placeholder.title.replace('[name]', searchQuery) }}</h2>
    <p class="no-results-message">
      {{ placeholder.message.replace('[name]', searchQuery) }}
    </p>
    <div class="divider"></div>
    <p
      v-if="placeholder.finePrint"
      class="no-results-fine-print"
    >
      {{ placeholder.finePrint }}
    </p>
    <VPButton
      v-if="isBrandSearch"
      text="前往 Simple Icons"
      theme="brand"
      :href="`https://simpleicons.org/?q=${searchQuery}`"
      target="_blank"
    />
    <VPButton
      v-else
      text="清除搜索并重试"
      theme="brand"
      @click="$emit('clear')"
    />
    <span class="text-divider">或者</span>
    <VPButton
      v-if="isBrandSearch"
      text="阅读我们关于品牌标志的声明"
      theme="alt"
      href="https://github.com/lucide-icons/lucide/blob/main/BRAND_LOGOS_STATEMENT.md"
      target="_blank"
    />
    <VPButton
      v-else
      text="搜索 GitHub issues"
      theme="alt"
      :href="`https://github.com/lucide-icons/lucide/issues?q=is%3Aopen+${searchQuery}`"
      target="_blank"
    />
  </div>
</template>

<style scoped>
.no-results {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-block: 48px;
}

.placeholder-icon {
  width: 96px;
  height: 96px;
  color: var(--vp-c-text-1);
}

.placeholder-icon.flip {
  transform: rotateY(180deg);
}

.no-results-text {
  line-height: 1.35;
  font-size: 24px;
  margin-top: 24px;
  margin-bottom: 8px;
  text-wrap: balance;
}

.no-results-message {
  text-wrap: balance;
}

.no-results-fine-print {
  max-inline-size: 60ch;
  font-size: 14px;
  margin-bottom: 32px;
  color: var(--vp-c-text-2);
  text-wrap: balance;
}

.text-divider {
  margin: 12px 0;
  font-size: 16px;
  color: var(--vp-c-neutral);
}
.divider {
  margin: 24px auto 18px;
  width: 64px;
  height: 1px;
  background-color: var(--vp-c-divider);
}
</style>
