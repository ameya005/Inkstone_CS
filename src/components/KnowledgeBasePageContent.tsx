import React, { useState } from "react";
import { Search, Plus, FileText, File, Presentation, Calculator, Calendar, Video, Users, Edit3, Share2, MessageCircle, Clock } from "lucide-react";

interface FileItem {
  id: string;
  name: string;
  type: 'word' | 'excel' | 'powerpoint' | 'pdf' | 'video' | 'image' | 'document';
  owner: string;
  opened: string;
  activity: string;
  activityType: 'edited' | 'shared' | 'commented' | 'replied';
  activityTime: string;
  thumbnail?: string;
}

interface RecentItem {
  id: string;
  title: string;
  description: string;
  owner: string;
  type: 'document' | 'meeting' | 'task' | 'presentation';
  action: string;
  time: string;
  thumbnail?: string;
}

const getFileIcon = (type: string) => {
  switch (type) {
    case 'word':
      return <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-semibold">W</div>;
    case 'excel':
      return <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center text-white text-xs font-semibold">X</div>;
    case 'powerpoint':
      return <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white text-xs font-semibold">P</div>;
    case 'pdf':
      return <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center text-white text-xs font-semibold">PDF</div>;
    case 'video':
      return <Video className="w-8 h-8 text-purple-500" />;
    case 'image':
      return <div className="w-8 h-8 bg-pink-500 rounded flex items-center justify-center text-white text-xs font-semibold">IMG</div>;
    default:
      return <FileText className="w-8 h-8 text-gray-500" />;
  }
};

const getActivityIcon = (type: string) => {
  switch (type) {
    case 'edited':
      return <Edit3 className="w-4 h-4 text-gray-500" />;
    case 'shared':
      return <Share2 className="w-4 h-4 text-blue-500" />;
    case 'commented':
      return <MessageCircle className="w-4 h-4 text-green-500" />;
    case 'replied':
      return <MessageCircle className="w-4 h-4 text-orange-500" />;
    default:
      return <Clock className="w-4 h-4 text-gray-500" />;
  }
};

export default function KnowledgeBasePageContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const recentItems: RecentItem[] = [
    {
      id: "1",
      title: "BESS Safety Manual",
      description: "Comprehensive safety guidelines",
      owner: "Carlos Slattery",
      type: "document",
      action: "Go to document",
      time: "2h ago"
    },
    {
      id: "2",
      title: "Monthly Safety Review",
      description: "Team meeting scheduled",
      owner: "Robin Counts",
      type: "meeting",
      action: "Join meeting",
      time: "2h ago"
    },
    {
      id: "3",
      title: "Training Progress Report",
      description: "Q4 assessment results",
      owner: "Chris Naidoo",
      type: "presentation",
      action: "Watch recording",
      time: "Friday"
    },
    {
      id: "4",
      title: "Maintenance Schedule",
      description: "Equipment inspection timeline",
      owner: "David Power",
      type: "task",
      action: "Go to task",
      time: "Thursday"
    }
  ];

  const files: FileItem[] = [
    {
      id: "1",
      name: "BESS Safety Protocols",
      type: "word",
      owner: "Carlos Slattery",
      opened: "24m ago",
      activity: "Carlos Slattery edited this",
      activityType: "edited",
      activityTime: "Wed"
    },
    {
      id: "2",
      name: "Emergency Response Plan",
      type: "powerpoint",
      owner: "Daisy Phillips",
      opened: "1h ago",
      activity: "You edited this",
      activityType: "edited",
      activityTime: "43m ago"
    },
    {
      id: "3",
      name: "Training Session Recording",
      type: "video",
      owner: "Daisy Phillips",
      opened: "2h ago",
      activity: "Daisy Phillips shared this in a Teams chat",
      activityType: "shared",
      activityTime: "3h ago"
    },
    {
      id: "4",
      name: "Incident Report Template",
      type: "word",
      owner: "Kat Larson",
      opened: "3h ago",
      activity: "You shared this file",
      activityType: "shared",
      activityTime: "3h ago"
    },
    {
      id: "5",
      name: "Equipment Inspection Checklist",
      type: "excel",
      owner: "David Power",
      opened: "Fri at 1:21 PM",
      activity: "David Power edited this",
      activityType: "edited",
      activityTime: "Fri"
    },
    {
      id: "6",
      name: "BESS Operations Manual",
      type: "pdf",
      owner: "Robin Counts",
      opened: "Fri at 10:35 PM",
      activity: "Robin Counts replied to your comment",
      activityType: "replied",
      activityTime: "Thur"
    },
    {
      id: "7",
      name: "Battery Performance Analysis",
      type: "excel",
      owner: "Kat Larson",
      opened: "Thur at 3:48 PM",
      activity: "Johnnie McConnell commented",
      activityType: "commented",
      activityTime: "Mon"
    }
  ];

  const filterTypes = ["All", "Word", "Excel", "PowerPoint", "PDF", "Video"];

  const filteredFiles = files.filter(file => {
    const matchesSearch = file.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         file.owner.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === "All" || 
                         (activeFilter === "Word" && file.type === "word") ||
                         (activeFilter === "Excel" && file.type === "excel") ||
                         (activeFilter === "PowerPoint" && file.type === "powerpoint") ||
                         (activeFilter === "PDF" && file.type === "pdf") ||
                         (activeFilter === "Video" && file.type === "video");
    return matchesSearch && matchesFilter;
  });

  return (
    <div
      className="bg-white box-border content-stretch flex flex-col h-[950px] items-start relative rounded-[8px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-full overflow-hidden"
      data-name="Knowledge Base Container"
    >
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full overflow-y-auto">
        <div className="flex flex-col items-start relative w-full">
          <div className="box-border content-stretch flex flex-col items-start px-[32px] py-[24px] relative w-full">
            
            {/* Header Section */}
            <div className="flex items-center justify-between w-full mb-6">
              <div className="flex flex-col gap-2">
                <h1 
                  className="font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold text-[32px] text-[#130261] leading-[1.2]"
                  style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}
                >
                  Knowledge Base
                </h1>
                <p 
                  className="font-['Noto_Sans:Regular',_sans-serif] font-normal text-[16px] text-[#666666] leading-[1.5]"
                  style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
                >
                  Access and manage all your BESS training resources and documentation.
                </p>
              </div>
              
              <button
                className="bg-[#6155f5] hover:bg-[#5046e4] text-white px-4 py-2.5 rounded-lg transition-colors font-['Noto_Sans:Medium',_sans-serif] font-medium text-[14px] flex items-center gap-2"
                style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
              >
                <Plus className="w-4 h-4" />
                Add Resource
              </button>
            </div>

            {/* For You Section */}
            <div className="w-full mb-8">
              <h2 
                className="font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold text-[20px] text-[#130261] mb-4"
                style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}
              >
                For you
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {recentItems.map((item) => (
                  <div 
                    key={item.id}
                    className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-8 h-8 bg-[#6155f5] rounded flex items-center justify-center">
                        {item.type === 'document' && <FileText className="w-4 h-4 text-white" />}
                        {item.type === 'meeting' && <Video className="w-4 h-4 text-white" />}
                        {item.type === 'presentation' && <Presentation className="w-4 h-4 text-white" />}
                        {item.type === 'task' && <Calendar className="w-4 h-4 text-white" />}
                      </div>
                      <div className="flex-1">
                        <h3 
                          className="font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold text-[14px] text-[#130261] mb-1"
                          style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}
                        >
                          {item.title}
                        </h3>
                        <p 
                          className="font-['Noto_Sans:Regular',_sans-serif] font-normal text-[12px] text-[#666666] mb-2"
                          style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
                        >
                          {item.description}
                        </p>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                          <span 
                            className="font-['Noto_Sans:Regular',_sans-serif] font-normal text-[12px] text-[#666666]"
                            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
                          >
                            {item.owner}
                          </span>
                          <span 
                            className="font-['Noto_Sans:Regular',_sans-serif] font-normal text-[12px] text-[#666666]"
                            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
                          >
                            {item.time}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button 
                      className="font-['Noto_Sans:Medium',_sans-serif] font-medium text-[12px] text-[#6155f5] hover:text-[#5046e4] transition-colors"
                      style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
                    >
                      {item.action}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Section */}
            <div className="w-full">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <h2 
                    className="font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold text-[20px] text-[#130261]"
                    style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}
                  >
                    Recent
                  </h2>
                  
                  {/* Filter Tabs */}
                  <div className="flex items-center gap-2">
                    {filterTypes.map((filter) => (
                      <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-3 py-1.5 rounded-full text-[12px] font-medium transition-colors ${
                          activeFilter === filter
                            ? 'bg-[#6155f5] text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Search Bar */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Filter by file name or person"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-64 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#6155f5] focus:border-transparent"
                    style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
                  />
                </div>
              </div>

              {/* Files Table */}
              <div className="bg-white rounded-lg border border-gray-200">
                {/* Table Header */}
                <div className="grid grid-cols-12 gap-4 px-4 py-3 border-b border-gray-200 bg-gray-50">
                  <div className="col-span-5">
                    <span 
                      className="font-['Noto_Sans:Medium',_sans-serif] font-medium text-[14px] text-[#666666]"
                      style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
                    >
                      Name
                    </span>
                  </div>
                  <div className="col-span-2">
                    <span 
                      className="font-['Noto_Sans:Medium',_sans-serif] font-medium text-[14px] text-[#666666]"
                      style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
                    >
                      Opened
                    </span>
                  </div>
                  <div className="col-span-2">
                    <span 
                      className="font-['Noto_Sans:Medium',_sans-serif] font-medium text-[14px] text-[#666666]"
                      style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
                    >
                      Owner
                    </span>
                  </div>
                  <div className="col-span-3">
                    <span 
                      className="font-['Noto_Sans:Medium',_sans-serif] font-medium text-[14px] text-[#666666]"
                      style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
                    >
                      Activity
                    </span>
                  </div>
                </div>

                {/* Table Rows */}
                <div className="divide-y divide-gray-200">
                  {filteredFiles.map((file) => (
                    <div 
                      key={file.id}
                      className="grid grid-cols-12 gap-4 px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <div className="col-span-5 flex items-center gap-3">
                        {getFileIcon(file.type)}
                        <span 
                          className="font-['Noto_Sans:Regular',_sans-serif] font-normal text-[14px] text-[#130261]"
                          style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
                        >
                          {file.name}
                        </span>
                      </div>
                      <div className="col-span-2 flex items-center">
                        <span 
                          className="font-['Noto_Sans:Regular',_sans-serif] font-normal text-[14px] text-[#666666]"
                          style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
                        >
                          {file.opened}
                        </span>
                      </div>
                      <div className="col-span-2 flex items-center gap-2">
                        <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                        <span 
                          className="font-['Noto_Sans:Regular',_sans-serif] font-normal text-[14px] text-[#666666]"
                          style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
                        >
                          {file.owner}
                        </span>
                      </div>
                      <div className="col-span-3 flex items-center gap-2">
                        {getActivityIcon(file.activityType)}
                        <span 
                          className="font-['Noto_Sans:Regular',_sans-serif] font-normal text-[12px] text-[#666666]"
                          style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}
                        >
                          {file.activity} • {file.activityTime}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}