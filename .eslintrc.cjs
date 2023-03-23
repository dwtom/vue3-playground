/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
  /*
   * "off" 或 0    ==>  关闭规则
   * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
   * "error" 或 2  ==>  规则作为一个错误
   */
  rules: {
    // 'prettier/prettier': 'off',
    semi: [1, 'always'], // 语句强制分号结尾
    quotes: [1, 'single'], // 引号类型为单引号
    // 2空格缩进
    indent: ['error', 2, { SwitchCase: 1 }],
    // 4空格缩进
    // indent: [2, 4],
    'no-console': 'warn',
    'no-debugger': 2,
    // 可以不以const为优先
    'prefer-const': 'off',
    // 关键字前后空格
    'keyword-spacing': [2, { before: true, after: true }],
    // 构造函数首字母大写
    'new-cap': [2, { newIsCap: true, capIsNew: false }],
    // 注释斜线后需要添加空格
    'spaced-comment': ['error', 'always'],

    // vue相关
    // 要求组件名称始终为 “-” 链接的单词
    'vue/multi-word-component-names': 'off',
    // 标签自闭合--会和prettier格式化冲突
    // 'vue/html-self-closing': [
    //   'error',
    //   {
    //     html: {
    //       void: 'never', // 单标签不可以自闭合
    //       normal: 'never', // 普通空标签不可自闭合
    //       component: 'always', // 组件需要自闭合
    //     },
    //     svg: 'always',
    //     math: 'always',
    //   },
    // ],

    // ts相关
    // 允许使用@ts-ignore 忽略ts报错
    '@typescript-eslint/ban-ts-comment': 'off',
    // 允许使用require语句
    '@typescript-eslint/no-var-requires': 'off',
    // 允许any
    '@typescript-eslint/no-explicit-any': 'off',
    // 允许使用特定类型 如object
    '@typescript-eslint/ban-types': 'off',
    // 允许使用namespace
    '@typescript-eslint/no-namespace': 'off',
    // 允许导出函数和类的公共类方法隐式返回(axios api函数传入泛型隐式返回)
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};
