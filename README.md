# coc-robotframework

coc.nvim extension for Robot Framework


## Install
Install `robotframework_ls`
`pip install robotframework-lsp`

Install extension using vim Plug. Add below line to your vim init
`Plug 'dimasaryo/coc-robotframework', {'do': 'yarn install --frozen-lockfile && yarn build'}`

Open vim and execute command `:PlugInstall`


:## Keymaps

`nmap <silent> <C-l> <Plug>(coc-coc-robotframework-keymap)`


## Lists

`:CocList demo_list`

## Todo
- Install using `:CocInstall coc-robotframework`
- Include `robotframework-lsp` during installation
- Add more properties


## License

MIT

---

> This extension is created by [create-coc-extension](https://github.com/fannheyward/create-coc-extension)
