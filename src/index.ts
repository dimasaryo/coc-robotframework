import {
    ExtensionContext,
    services,
    workspace,
    LanguageClient,
} from 'coc.nvim'

export async function activate(context: ExtensionContext): Promise<void> {
    const config = workspace.getConfiguration('coc-robotframework')
    const isEnable = config.get<boolean>('enable', true)
    if (!isEnable) {
        return
    }
    const serverOptions = {
        command: 'robotframework_ls',
    }
    const clientOptions = {
        documentSelector: ['robot', 'resource'],
    }
    const client = new LanguageClient(
        'coc-robotframework',
        'coc-robotframework',
        serverOptions,
        clientOptions
    )
    context.subscriptions.push(services.registerLanguageClient(client))
}
