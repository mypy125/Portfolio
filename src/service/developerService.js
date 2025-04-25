import { supabase } from "../util/connection/supbaseClient.js";

export const SurveyService = {
  async saveDeveloperSurvey(formData) {
    try {
      const { data, error } = await supabase
        .from('developers') 
        .insert([{
          stack: formData.stack,
          backend_framework: formData.backendFramework,
          project_priority: formData.projectPriority,
          java_level: formData.javaLevel,
          work_style: formData.workStyle,
          learning: formData.learning,
          growth_style: formData.growthStyle
        }])
        .select();

      if (error) throw error;
      return { success: true, data: data[0] };
    } catch (error) {
      console.error('Save error:', error);
      return { success: false, error: error.message };
    }
  },

  async getDevelopers() {
    const { data, error } = await supabase
      .from('developers')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  }
};