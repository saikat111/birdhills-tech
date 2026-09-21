export interface ChatMessageDto {
  id?: string;
  sender: "user" | "assistant" | "system";
  text: string;
  createdAt?: string;
}

export interface QualificationData {
  leadName?: string;
  leadEmail?: string;
  leadPhone?: string;
  leadCompany?: string;
  serviceInterest?: string;
  budgetEstimated?: string;
  isQualified: boolean;
}

export interface AIResponse {
  reply: string;
  qualification: QualificationData;
}
