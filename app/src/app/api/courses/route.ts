import {createClient} from "@/lib/supabase/server";

export async function GET() {

    const supabase = await createClient();

    const {data, error} = await supabase.from('courses').select('*');

    return new Response(JSON.stringify(data), {
        status: 200,
        headers: {'Content-Type': 'application/json'}
    });
}
