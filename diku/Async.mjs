
export async function nodeMain_$(system_, $task) {
    
    const files = Link("a.txt", Link("b.txt", Empty()));
    
    const contents = await List_map$(files, async (file_, $task) => {
        return (await Path_readText$(await NodeSystem_path$(system_, file_, $task)), $task)
    }, $task);
    
    const upper = List_map(contents, ((content_) => {
        return String_upper(content_)
    }));
    
    Log.debug_("Result: " + List_join(upper, ""))
}



export async function nodeMain_$(system) {
    
    const files = Link("a.txt", Link("b.txt", Empty()));
    
    const contents = await List_map$(files, async file => {
        return await Path_readText$(await NodeSystem_path$(system, file))
    });
    
    const upper = List_map(contents, content => {
        return String_upper(content)
    });
    
    Log.debug_("Result: " + List_join(upper, ""))
    
}

