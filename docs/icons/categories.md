---
title: 分类
description: 浏览按不同分类组织的 Lucide 图标，方便查找。
layout: page
outline: 2
outlineTitle: 分类
sidebar: true
---

<script setup>
import { data } from './icons.data.ts'
import { data as categoriesData } from './categories.data.ts'
import PageContainer from '../.vitepress/theme/components/PageContainer.vue'
import IconsCategoryOverview from '../.vitepress/theme/components/icons/IconsCategoryOverview.vue'
import useIconsWithExternalLibs from '~/.vitepress/theme/composables/useIconsWithExternalLibs'

const icons = useIconsWithExternalLibs(data.icons)
</script>

<div class="VPDoc content">
  <PageContainer>
    <IconsCategoryOverview
      :categories="categoriesData.categories"
      :icons="icons"
      :iconCategories="categoriesData.iconCategories"
    />
  </PageContainer>
</div>
