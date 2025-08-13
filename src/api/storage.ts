export const storage = {
  getSelectedId(): string | null {
    return localStorage.getItem('selectedCampaignId');
  },
  setSelectedId(id: string) {
    localStorage.setItem('selectedCampaignId', id);
  },
};
