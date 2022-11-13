import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://qkkyhcnsruyygowaowqq.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFra3loY25zcnV5eWdvd2Fvd3FxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzNTc1NzIsImV4cCI6MTk4MzkzMzU3Mn0.NlwWKPVzK8SyKHR6fbNxuXZnCHW3QlqhdAKQLLK81t8";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("videos")
                    .select("*");
        }
    }
}