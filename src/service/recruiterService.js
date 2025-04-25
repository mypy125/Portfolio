import { supabase } from "../util/connection/supbaseClient.js";

export const RecruiterService = {
  async saveRecruiterForm(formData) {
    try {
      const { data, error } = await supabase
        .from('recruiters')
        .insert([{
          name: formData.name,
          company: formData.company,
          hiring_focus: formData.hiringFocus,
          traits: formData.traits,
          dealbreaker: formData.dealbreaker,
          favorite_stack: formData.favoriteStack,
          message_to_devs: formData.messageToDevs
        }])
        .select();

      if (error) throw error;
      return { success: true, data: data[0] };
    } catch (error) {
      console.error('Save error:', error);
      return { success: false, error: error.message };
    }
  }
};